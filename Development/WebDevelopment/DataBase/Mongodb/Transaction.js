router.post('/transfer', authMiddleware, async (req, res) => {
    //-Create
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { amount, to, from } = req.body;

        const account = await Accountdb.findOne({ userId: from }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const toAccount = await Accountdb.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        //- Perform the transfer in a single bulkWrite operation
        await Accountdb.bulkWrite([
            {
                updateOne: {
                    filter: { userId: from },
                    update: { $inc: { balance: -amount } },
                    session
                }
            },
            {
                updateOne: {
                    filter: { userId: to },
                    update: { $inc: { balance: amount } },
                    session
                }
            }
        ]);

        //- Commit the transaction
        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Error while transferring" });
    } finally {
        session.endSession();
    }
});

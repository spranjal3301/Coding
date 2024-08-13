import z from 'zod';

export const paymentInfo=z.object({
    userId:z.string(),
    amount:z.coerce.number(),
    onRamptoken:z.string()
});

export type paymentInfoType=z.infer<typeof paymentInfo> 
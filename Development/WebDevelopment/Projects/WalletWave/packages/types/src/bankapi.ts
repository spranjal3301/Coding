import z from 'zod';

export const transferInfo=z.object({
    userId:z.string(),
    amount:z.coerce.number(),
    onRamptoken:z.string(),
    webHookLink:z.string().url()
})

export type transferInfotype=z.infer<typeof transferInfo>;
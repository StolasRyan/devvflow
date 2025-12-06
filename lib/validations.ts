import z from "zod";


export const SignInSchema = z.object({
    email: z
    .string()
    .min(1,{error: "Email required"})
    .email({error: 'Provide valid email'}),
    password: z
    .string()
    .min(6, {error: 'Password require to be min 6 symbols'})
    .max(25, {error:'Password too long'})
})

export const SignUpSchema = z.object({
    email: z
    .string()
    .min(1,{error: "Email required"})
    .email({error: 'Provide valid email'}),
    password: z
    .string()
    .min(6, {error: 'Password require to be min 6 symbols'})
    .max(25, {error:'Password too long'}),
    name:z
    .string()
    .min(6)
    .max(15),
    username: z
    .string()
    .min(6)
    .max(15)
})
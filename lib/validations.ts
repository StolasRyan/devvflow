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

export const AskAQuestionSchema = z.object({
    title: z
    .string()
    .min(5, {error: 'Title required'})
    .max(100, {error: "Tiltle cant be bigger than 100 characters"}),

    content: z
    .string()
    .min(1, {error: "Content is required"}),

    tags: z.array(
        z
        .string()
        .min(1, {error: "Tag required"})
        .max(30, {error: 'Tag connot be exeed 30 characters'})
    )
    .min(1,{error: "At least 1 tag required"})
    .max(3,{error: "Cannot add more than 3 tags"})
})
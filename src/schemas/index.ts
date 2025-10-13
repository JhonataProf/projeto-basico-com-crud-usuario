import * as z from 'zod';

export const createUserSchema = z.object({
    username: z.string("O nome de usuario está incorreto")
    .min(3, { error: "O nome de usuario deve ter no mínimo 3 caracteres" })
    .max(30, { error: "O nome de usuario de ter no máximo 30 caracteres" }),
    email: z.email("O email está incorreto"),
    senha: z.
        string()
        .min(6, { error: "A senha deve ter no minimo 6 caracteres" })
        .max(8, { error: "A senha deve ter no máximo 8 caracteres" }),
    role: z.enum(['Gerente', 'Funcionario', "Cliente"], { 
         error: "'Gerente', 'Funcionario', 'Cliente'",
    }),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const updateUsuarioSchema = z.object({
    username: z.string("O nome de usuario está incorreto")
    .min(3, { error: "O nome de usuario deve ter no mínimo 3 caracteres" })
    .max(30, { error: "O nome de usuario de ter no máximo 30 caracteres" })
    .optional(),
    senha: z.
        string()
        .min(6, { error: "A senha deve ter no minimo 6 caracteres" })
        .max(8, { error: "A senha deve ter no máximo 8 caracteres" })
        .optional(),
    role: z.enum(['Gerente', 'Funcionario', "Cliente"], { 
         error: "'Gerente', 'Funcionario', 'Cliente'",
    }).optional(),
});

export type UpdateUserDTO = z.infer<typeof updateUsuarioSchema>;

export const loginSchema = z.object({
    email: z.email({error:"O email está no formato incorreto"}),
    senha: z.string()
    .min(6, {error: "A senha deve ter no mínimo 6 caracteres"})
    .max(8, {error: "A senha deve ter no maximo 8 caracteres"})
})

export type LoginDTO = z.infer<typeof loginSchema>;

export const refreshTokenSchema = z.object({
    refreshToken: z.string
})














export const pedidoItemSchema = z.object({
    produtoId: z.number({ error: "O ID do produto deve ser um número" }),
    quantidade: z
        .number({ error: "A quantidade deve ser um número" })
        .min(1, { error: "A quantidade mínima é 1" }),
    precoUnitario: z
        .number({ error: "O preço unitário deve ser um número" })
        .min(0, { error: "O preço unitário não pode ser negativo" }),
});

export type PedidoItemDTO = z.infer<typeof pedidoItemSchema>;

export const updatePedidoSchema = z.object({
    statys: z 
        .enum(["Pendnete", "em Prograsso", "Concluido", "Cancelado"], {
            error:
              "O status deve ser 'Pendente', 'Em Progresso', 'Concluido' ou 'Cancelado'"
        })
})
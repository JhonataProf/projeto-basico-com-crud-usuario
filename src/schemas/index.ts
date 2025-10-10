import * as z from "zod";

export const createUserSchema = z.object({
  nome: z
    .string({ error: "O nome de usuario está incorreto" })
    .min(3, { error: "O nome de usuario deve ter no mínimo 3 caracteres" })
    .max(30, { error: "O nome de usuario deve ter no máximo 30 caracteres" }),
  email: z.email({ error: "O email está no formato incorreto" }),
  senha: z
    .string()
    .min(6, { error: "A senha deve ter no minimo 6 caracteres" })
    .max(8, { error: "A senha deve ter no máximo 8 caracteres" }),
  role: z.enum(["Gerente", "Funcionario", "Cliente"], {
    error: "A role deve ser 'Gerente', 'Funcionario' ou 'Cliente'",
  }),
});

export const updateUserSchema = z.object({
  nome: z
    .string({ error: "O nome de usuario está incorreto" })
    .min(3, { error: "O nome de usuario deve ter no mínimo 3 caracteres" })
    .max(30, { error: "O nome de usuario deve ter no máximo 30 caracteres" })
    .optional(),
  senha: z
    .string()
    .min(6, { error: "A senha deve ter no minimo 6 caracteres" })
    .max(8, { error: "A senha deve ter no máximo 8 caracteres" })
    .optional(),
  role: z
    .enum(["Gerente", "Funcionario", "Cliente"], {
      error: "A role deve ser 'Gerente', 'Funcionario' ou 'Cliente'",
    })
    .optional(),
});

export const loginSchema = z.object({
  email: z.email({ error: "O email está no formato incorreto" }),
  senha: z
    .string()
    .min(6, { error: "A senha deve ter no minimo 6 caracteres" })
    .max(8, { error: "A senha deve ter no máximo 8 caracteres" }),
});

export const pedidoItemSchema = z.object({
  produtoId: z.number({ error: "O ID do produto está incorreto" }),
  quantidade: z
    .number({ error: "A quantidade deve ser um número" })
    .min(0, { error: "O preço unitário deve ser no minimo 0" }),
});

export type PedidoItemDTO = z.infer<typeof pedidoItemSchema>;

export const updatePedidoSchama = z.object({
  status: z.enum(["Pendente", "Em Progresso", "Concluido", "Cancelado"], {
    error:
      "O status deve ser 'Pendente', 'Em Processo', 'Concluido' ou 'Cancelado'",
  })
  .optional(),
  itens: z.array(pedidoItemSchema).optional(),
});

export type UpatePedidoDTO = z.infer<typeof updatePedidoSchama>;

export const createPedidoSchema = z.object({
  usuarioId: z.number({ error: "O ID do usuário está incorreto" }),
  itens: z
    .array(pedidoItemSchema, {
      error: "Os itens do pedido estão incorretos",
    })
    .min(1, { error: "O pedido deve ter no minimo 1 item" })
})

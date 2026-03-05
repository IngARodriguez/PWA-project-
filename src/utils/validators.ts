import { z } from 'zod';

export const emailSchema = z.string().email('Email invalido');

export const passwordSchema = z
  .string()
  .min(8, 'La contrasena debe tener al menos 8 caracteres')
  .regex(/[A-Z]/, 'Debe contener al menos una mayuscula')
  .regex(/[0-9]/, 'Debe contener al menos un numero');

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'La contrasena es requerida'),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contrasenas no coinciden',
    path: ['confirmPassword'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

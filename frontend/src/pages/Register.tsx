import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Center, Flex, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleLoginButton } from 'react-social-login-buttons'

import { Logo } from '@/components/Logo'
import { Input } from '@/components/Form/Input'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { useAuth } from '@/contexts/AuthContext'
import axios from 'axios'
import { toaster } from '@/components/ui/toaster'

const registerSchema = z
  .object({
    firstName: z.string().nonempty(),
    email: z.string().email().nonempty(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'As senhas não são iguais',
  })

export type RegisterFormData = z.infer<typeof registerSchema>

export function Register() {
  const { signInwithGoogle, register } = useAuth()

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  async function handleRegistration(data: RegisterFormData) {
    try {
      await register({
        email: data.email,
        first_name: data.firstName,
        password: data.password,
        login_provider: 'email',
      })
    } catch (error) {
      console.log(error)

      if (axios.isAxiosError(error) && error.response?.status === 400) {
        return toaster.create({
          title: 'Houve um erro',
          description: error.response.data.message,
          duration: 3000,
        })
      }

      toaster.create({
        title: 'Houve um erro',
        description:
          'Erro ao fazer login, por favor, tente novamente mais tarde',
        duration: 3000,
      })
    }
  }

  async function handleSignInWithGoogle() {
    try {
      await signInwithGoogle()
    } catch (error) {
      console.log(error)

      if (axios.isAxiosError(error) && error.response?.status === 400) {
        return toaster.create({
          title: 'Houve um erro',
          description: error.response.data.message,
          duration: 3000,
        })
      }

      toaster.create({
        title: 'Houve um erro',
        description:
          'Erro ao fazer login, por favor, tente novamente mais tarde',
        duration: 3000,
      })
    }
  }

  return (
    <Center h="100vh">
      <Flex
        as="form"
        gap="4"
        flexDir="column"
        w="100%"
        maxW="96"
        bg="gray.50"
        p="4"
        borderRadius="6px"
        onSubmit={form.handleSubmit(handleRegistration)}
      >
        <Logo />
        <h2>Registro</h2>
        <Input
          placeholder="Digite seu primeiro nome"
          register={form.register('firstName')}
        />
        <Input
          placeholder="Digite seu e-mail"
          register={form.register('email')}
        />
        <Input
          placeholder="Digite sua senha"
          type="password"
          register={form.register('password')}
        />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          register={form.register('confirmPassword')}
        />
        <Checkbox inputProps={{ required: true }}>
          Eu aceito os <a href="">termos de uso</a> e a{' '}
          <a href="">política de privacidade</a>
        </Checkbox>

        <Button type="submit">Registrar-se</Button>

        <hr />

        <Text as="span" fontSize="sm">
          Possui uma conta?{' '}
          <Link to="/login">
            <Text as="span" color="purple.500">
              Entrar
            </Text>
          </Link>
        </Text>

        <Flex bgColor="purple.400" h="2px" justify="center" align="center">
          <Text bgColor="white" px="2" color="purple.500" fontSize="sm">
            Ou
          </Text>
        </Flex>

        <GoogleLoginButton
          text="Entre com o Google"
          style={{
            height: '38px',
            fontSize: '14px',
            lineHeight: '14px',
            width: '100%',
            margin: '0',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px',
          }}
          onClick={handleSignInWithGoogle}
        />
      </Flex>
    </Center>
  )
}

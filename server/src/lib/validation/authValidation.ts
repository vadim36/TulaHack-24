import {object, string, minLength, maxLength, email, number, minValue, maxValue, defaultArgs} from 'valibot'

export const RegistrationScheme = object({
  name: string('the user name must be a string', [
    minLength(3, 'the user name must be longer than 3'),
    maxLength(24, 'the user name must be less than 24')
  ]),
  email: string('the email must be a string', [
    email<string>('the email must be correct'),
    minLength(3, 'the email must be longer than 3'),
    maxLength(45, 'the email must be less than 45'),
  ]),
  password: string('the password must be a string', [
    minLength(5, 'the password must be longer than 5'),
    maxLength(32, 'the password must be longer than 32')
  ]),
  petBreed: string(),
  petName: string('the petName must be a string', [
      minLength(3, 'the pet name must be longer than 3'),
      maxLength(32, 'the pet name must be less than 32')
  ]),
  petAge: number('the pet age must be a number', [
      minValue(-1, 'the pet age must be -1 and more'),
      maxValue(150, 'tha pet age must be 150 and less')
  ]),
  petWeight: number('the pet weight must be a number', [
      minValue(-1, 'the pet weight must be -1 and more'),
      maxValue(150, 'tha pet weight must be 150 and less')
  ])
})

export const LoginScheme = object({
  email: string('the email must be a string', [
    email<string>('the email must be correct'),
    minLength(3, 'the id must be longer than 3'),
    maxLength(45, 'the id must be less than 45'),
  ]),
  password: string('the password must be a string', [
    minLength(5, 'the password must be longer than 5'),
    maxLength(32, 'the password must be longer than 32')
  ])
})

export const PetRegScheme = object({
  petBreed: string(),
  petName: string('the petName must be a string', [
      minLength(3, 'the pet name must be longer than 3'),
      maxLength(32, 'the pet name must be less than 32')
  ]),
  petAge: number('the pet age must be a number', [
      minValue(-1, 'the pet age must be -1 and more'),
      maxValue(150, 'tha pet age must be 150 and less')
  ]),
  petWeight: number('the pet weight must be a number', [
      minValue(-1, 'the pet weight must be -1 and more'),
      maxValue(150, 'tha pet weight must be 150 and less')
  ])
})

export const TaskScheme = object({
  taskBody: string('the task body must be a string', [
    minLength(3, 'the task body must be longer than 3'),
    maxLength(64, 'the task body must be less than 64')
  ]),
  taskStatus: number('the task status must be a number')
})
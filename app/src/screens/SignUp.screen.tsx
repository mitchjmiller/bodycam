import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { UserService } from '../services/User.service';
import Styles from '../styles/Styles';
import { useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { SnackService } from '../services/Snack.service';


type Props = {
  navigation: NativeStackNavigationProp<any, any>
};

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string
};

export default function SignUpScreen({ navigation }: Props) {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const createUser: SubmitHandler<FormData> = async (data) => {
    setSubmitButtonDisabled(true);
    try {
      const user = await UserService.createUser(data);
      console.log(user);

      // TODO Store user to persistent state

      // .replace to prevent back button navigation
      navigation.replace('Main');
    } catch (err: any) {
      console.log(err);

      if (err instanceof AxiosError) {
        let message: string = err.response?.data?.message;
        if (err.response?.status === 400)
          message = err.response?.data?.message[0];

        SnackService.simpleMessage(message);
      }

      setSubmitButtonDisabled(false);
    }
  };

  const { control, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    defaultValues:{
      email:'',
      firstName:'',
      lastName:'',
      password:'',
      confirmPassword:''
    }
  });

  const password = useRef('');
  password.current = watch('password', '');

  return (
    <View style={Styles.container}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={Styles.spaceAfter}
            dense
            autoComplete={true}
            onBlur={onBlur}
            value={value}
            error={!!errors.email}
            onChangeText={onChange}
            label="E-mail"
            mode="outlined"
          />
        )}
      />

      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={Styles.spaceAfter}
            dense
            autoComplete={true}
            onBlur={onBlur}
            value={value}
            error={!!errors.firstName}
            onChangeText={onChange}
            label="First Name"
            mode="outlined"
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={Styles.spaceAfter}
            dense
            autoComplete={true}
            onBlur={onBlur}
            value={value}
            error={!!errors.lastName}
            onChangeText={onChange}
            label="Last Name"
            mode="outlined"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={Styles.spaceAfter}
            dense
            secureTextEntry
            autoComplete={false}
            onBlur={onBlur}
            value={value}
            error={!!errors.password}
            onChangeText={onChange}
            label="Password"
            mode="outlined"
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: true,
          validate: (value) => value === password.current || 'The passwords do not match'
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={Styles.spaceAfter}
            dense
            secureTextEntry
            autoComplete={false}
            onBlur={onBlur}
            value={value}
            error={!!errors.confirmPassword}
            onChangeText={onChange}
            label="Confirm Password"
            mode="outlined"
          />
        )}
      />

      <Button
        mode="contained"
        disabled={!errors || submitButtonDisabled}
        onPress={handleSubmit(createUser)}
      >Create Account</Button>
    </View>
  );
}

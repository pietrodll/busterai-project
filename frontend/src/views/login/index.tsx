import * as React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { LoginComponentProps } from '../../components/auth';

import { useLogin } from './use-login';

export const Login: React.FC<LoginComponentProps> = props => {
  const {
    email,
    password,
    confirmPassword,
    newUser,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleChangeNewUser,
    handleSubmit,
  } = useLogin(props);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField value={email} label="Email" onChange={handleChangeEmail} />
        <TextField
          type="password"
          value={password}
          label="Password"
          onChange={handleChangePassword}
        />
        {newUser && (
          <TextField
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            onChange={handleChangeConfirmPassword}
          />
        )}
        <Typography>Are you a new user?</Typography>
        <Checkbox checked={newUser} onChange={handleChangeNewUser} />
        <Button type="submit">{newUser ? 'Create account!' : 'Login'}</Button>
      </form>
    </div>
  );
};

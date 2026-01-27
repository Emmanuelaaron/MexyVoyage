# Redux Toolkit Setup

This project uses Redux Toolkit for state management.

## Installation

The required packages are already added to `package.json`:
- `@reduxjs/toolkit` - Redux Toolkit
- `react-redux` - React bindings for Redux

To install dependencies:
```bash
npm install
# or
pnpm install
```

## Store Structure

```
src/store/
├── store.js          # Store configuration
├── hooks.js          # Typed hooks for useDispatch and useSelector
└── slices/
    └── authSlice.js  # Authentication slice
```

## Usage Examples

### Using Auth State in Components

```javascript
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { signIn, signOut, getCurrentUser } from '../store/slices/authSlice';

function MyComponent() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loading, error } = useAppSelector((state) => state.auth);

  const handleLogin = async () => {
    try {
      await dispatch(signIn({ email: 'user@example.com', password: 'password' })).unwrap();
      // Login successful
    } catch (error) {
      // Handle error
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    await dispatch(signOut());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.full_name || user?.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

### Available Auth Actions

- `signUp(userData)` - Register a new user
- `signIn({ email, password })` - Sign in user
- `signOut()` - Sign out user
- `getCurrentUser()` - Fetch current user data
- `updateUser(userData)` - Update user profile
- `clearError()` - Clear error state
- `setCredentials({ user, token })` - Manually set credentials
- `clearCredentials()` - Clear credentials

### Auth State

```javascript
{
  user: null | {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    admin: boolean,
    created_at: string,
    updated_at: string
  },
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  error: string | null
}
```

## Adding New Slices

To add a new slice:

1. Create a new file in `src/store/slices/`:
```javascript
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myFeature',
  initialState: {
    // initial state
  },
  reducers: {
    // synchronous reducers
  },
  extraReducers: (builder) => {
    // async reducers (if using createAsyncThunk)
  },
});

export default mySlice.reducer;
```

2. Add it to the store in `src/store/store.js`:
```javascript
import myReducer from './slices/mySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    myFeature: myReducer, // Add here
  },
});
```

## TypeScript Support

The store is configured with TypeScript types. Use the typed hooks:

```javascript
import { useAppDispatch, useAppSelector } from '../store/hooks';

// Instead of:
// import { useDispatch, useSelector } from 'react-redux';
```

## Best Practices

1. **Use typed hooks**: Always use `useAppDispatch` and `useAppSelector` instead of the plain Redux hooks
2. **Handle errors**: Always wrap async thunks in try-catch or use `.unwrap()` to handle errors
3. **Select specific state**: Don't select the entire state, select only what you need:
   ```javascript
   // Good
   const user = useAppSelector((state) => state.auth.user);
   
   // Avoid
   const auth = useAppSelector((state) => state.auth);
   ```
4. **Clear errors**: Clear errors when appropriate (e.g., when component unmounts or form resets)

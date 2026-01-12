import { TextField, InputAdornment, Box, Typography } from '@mui/material'
import { colors } from '../theme'

interface InputProps {
  label?: string
  placeholder?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  supportingText?: string
  state?: 'default' | 'focused' | 'active' | 'error' | 'disabled'
  error?: boolean
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  fullWidth?: boolean
  backgroundColor?: string
}

export default function Input({
  label,
  placeholder = 'Placeholder',
  leadingIcon,
  trailingIcon,
  supportingText,
  state = 'default',
  error = false,
  value,
  onChange,
  fullWidth = false,
  backgroundColor,
}: InputProps) {
  const isError = error || state === 'error'
  const isDisabled = state === 'disabled'

  return (
    <Box sx={{ width: fullWidth ? '100%' : 400 }}>
      <TextField
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        error={isError}
        fullWidth
        InputProps={{
          startAdornment: leadingIcon && (
            <InputAdornment position="start">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: isError
                    ? colors.error.main
                    : isDisabled
                    ? colors.neutral.dark
                    : colors.text.darker,
                }}
              >
                {leadingIcon}
              </Box>
            </InputAdornment>
          ),
          endAdornment: trailingIcon && (
            <InputAdornment position="end">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: isError
                    ? colors.error.main
                    : isDisabled
                    ? colors.neutral.dark
                    : colors.text.darker,
                }}
              >
                {trailingIcon}
              </Box>
            </InputAdornment>
          ),
          sx: {
            height: 48,
            backgroundColor: backgroundColor || 'transparent',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isError
                ? colors.error.main
                : isDisabled
                ? colors.neutral.main
                : colors.neutral.dark,
              borderRadius: '4px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isError ? colors.error.main : colors.neutral.dark,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: isError ? colors.error.main : colors.secondary.main,
              borderWidth: 1,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
            },
          },
        }}
        InputLabelProps={{
          sx: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 600,
            color: isError
              ? colors.error.main
              : isDisabled
              ? colors.neutral.darker
              : colors.neutral.darker,
            '&.Mui-focused': {
              color: isError ? colors.error.main : colors.secondary.main,
            },
            '&.Mui-error': {
              color: colors.error.main,
            },
          },
        }}
        inputProps={{
          sx: {
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: isDisabled ? colors.neutral.dark : colors.text.darker,
            '&::placeholder': {
              color: colors.neutral.dark,
              opacity: 1,
            },
          },
        }}
      />
      {supportingText && (
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 400,
            color: isError ? colors.error.main : colors.text.medium,
            mt: 0.5,
            px: 1.25,
          }}
        >
          {supportingText}
        </Typography>
      )}
    </Box>
  )
}

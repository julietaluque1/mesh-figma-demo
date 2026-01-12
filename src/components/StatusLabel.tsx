import { Box, Typography } from '@mui/material'
import { Pending, Cancel, ErrorOutline } from '@mui/icons-material'
import { colors } from '../theme'

interface StatusLabelProps {
  status: 'approved' | 'needs-review' | 'unable-to-verify' | 'in-progress' | 'cancelled' | 'failed'
}

export default function StatusLabel({ status }: StatusLabelProps) {
  const statusConfig = {
    approved: {
      label: 'Approved',
      backgroundColor: colors.success.light,
      textColor: colors.success.dark,
      borderColor: colors.success.light,
      icon: null,
    },
    'needs-review': {
      label: 'Approved (needs review)',
      backgroundColor: colors.success.light,
      textColor: colors.success.dark,
      borderColor: colors.success.light,
      icon: null,
    },
    'unable-to-verify': {
      label: 'Unable to verify',
      backgroundColor: colors.error.light,
      textColor: colors.error.dark,
      borderColor: colors.error.light,
      icon: null,
    },
    'in-progress': {
      label: 'In progress',
      backgroundColor: 'transparent',
      textColor: colors.primary.main,
      borderColor: 'transparent',
      icon: <Pending sx={{ fontSize: 12 }} />,
    },
    cancelled: {
      label: 'Cancelled',
      backgroundColor: 'transparent',
      textColor: colors.primary.main,
      borderColor: 'transparent',
      icon: <Cancel sx={{ fontSize: 12 }} />,
    },
    failed: {
      label: 'Failed',
      backgroundColor: 'transparent',
      textColor: colors.primary.main,
      borderColor: 'transparent',
      icon: <ErrorOutline sx={{ fontSize: 12 }} />,
    },
  }

  const config = statusConfig[status]

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: config.icon ? 0 : undefined,
      }}
    >
      {config.icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: config.textColor,
          }}
        >
          {config.icon}
        </Box>
      )}
      <Box
        sx={{
          backgroundColor: config.backgroundColor,
          border: config.borderColor !== 'transparent' ? `1px solid ${config.borderColor}` : 'none',
          borderRadius: '80px',
          px: 0.75,
          py: 0.5,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 600,
            color: config.textColor,
          }}
        >
          {config.label}
        </Typography>
      </Box>
    </Box>
  )
}

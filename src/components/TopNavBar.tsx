import { Box, Typography, IconButton, Divider } from '@mui/material'
import { Search, Notifications } from '@mui/icons-material'
import { colors } from '../theme'
import Input from './Input'

interface TopNavBarProps {
  trialUser?: boolean
  creditsLeft?: number
  onSearch?: (query: string) => void
  onNotificationClick?: () => void
}

export default function TopNavBar({
  trialUser = true,
  creditsLeft = 8,
  onSearch,
  onNotificationClick,
}: TopNavBarProps) {
  return (
    <Box
      sx={{
        backgroundColor: colors.neutral.lighter,
        borderBottom: `1px solid ${colors.neutral.main}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2,
        height: 80,
      }}
    >
      {/* Search Input */}
      <Input
        placeholder="Search here"
        leadingIcon={<Search sx={{ fontSize: 20 }} />}
        onChange={(e) => onSearch?.(e.target.value)}
      />

      {/* Right Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Free Trial Badge */}
        {trialUser && (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: '16px',
                  fontWeight: 400,
                  color: colors.text.medium,
                }}
              >
                Free Trial
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: '16px',
                  fontWeight: 600,
                  color: colors.success.main,
                }}
              >
                {creditsLeft} credits left
              </Typography>
            </Box>

            {/* Divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: colors.neutral.main,
                height: 'auto',
                alignSelf: 'stretch',
              }}
            />
          </>
        )}

        {/* Notification Bell */}
        <IconButton
          onClick={onNotificationClick}
          sx={{
            p: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Notifications
            sx={{
              fontSize: 24,
              color: colors.primary.medium,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  )
}

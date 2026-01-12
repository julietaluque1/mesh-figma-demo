import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { Person, People, CreditCard, Settings, Logout } from '@mui/icons-material'
import { colors } from '../theme'

interface UserProfileDropdownProps {
  anchorEl: null | HTMLElement
  open: boolean
  onClose: () => void
  onSelect: (option: string) => void
}

export default function UserProfileDropdown({
  anchorEl,
  open,
  onClose,
  onSelect,
}: UserProfileDropdownProps) {
  const handleMenuItemClick = (option: string) => {
    onSelect(option)
    onClose()
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          backgroundColor: colors.neutral.lighter,
          borderRadius: '8px',
          mb: 1,
          minWidth: anchorEl?.offsetWidth || 200,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <MenuItem
        onClick={() => handleMenuItemClick('Profile')}
        sx={{
          py: 1.5,
          px: 2,
          '&:hover': {
            backgroundColor: colors.neutral.medium,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.neutral.darker }}>
          <Person sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Profile"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.text.darker,
          }}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick('Team')}
        sx={{
          py: 1.5,
          px: 2,
          '&:hover': {
            backgroundColor: colors.neutral.medium,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.neutral.darker }}>
          <People sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Team"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.text.darker,
          }}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick('Billing')}
        sx={{
          py: 1.5,
          px: 2,
          '&:hover': {
            backgroundColor: colors.neutral.medium,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.neutral.darker }}>
          <CreditCard sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Billing"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.text.darker,
          }}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick('Settings')}
        sx={{
          py: 1.5,
          px: 2,
          '&:hover': {
            backgroundColor: colors.neutral.medium,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.neutral.darker }}>
          <Settings sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Settings"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.text.darker,
          }}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick('Log out')}
        sx={{
          py: 1.5,
          px: 2,
          '&:hover': {
            backgroundColor: colors.error.light,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.error.main }}>
          <Logout sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Log out"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.error.main,
          }}
        />
      </MenuItem>
    </Menu>
  )
}

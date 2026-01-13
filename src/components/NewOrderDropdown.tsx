import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { Description, Upload } from '@mui/icons-material'
import { colors } from '../theme'

interface NewOrderDropdownProps {
  anchorEl: null | HTMLElement
  open: boolean
  onClose: () => void
  onSelect: (option: string) => void
}

export default function NewOrderDropdown({
  anchorEl,
  open,
  onClose,
  onSelect,
}: NewOrderDropdownProps) {
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
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          backgroundColor: colors.neutral.lighter,
          borderRadius: '8px',
          mt: 1,
          minWidth: anchorEl?.offsetWidth || 200,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <MenuItem
        onClick={() => handleMenuItemClick('Single Verification')}
        sx={{
          py: 1.5,
          px: 2,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: colors.secondary.light,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.secondary.main }}>
          <Description sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Single Verification"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.text.darker,
          }}
        />
      </MenuItem>
      <MenuItem
        onClick={() => handleMenuItemClick('Batch Upload')}
        sx={{
          py: 1.5,
          px: 2,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: colors.secondary.light,
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: colors.secondary.main }}>
          <Upload sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary="Batch Upload"
          primaryTypographyProps={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 400,
            color: colors.text.darker,
          }}
        />
      </MenuItem>
    </Menu>
  )
}

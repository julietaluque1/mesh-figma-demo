import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { colors } from '../theme'
import { SvgIconComponent } from '@mui/icons-material'

interface SidebarNavItemProps {
  icon: SvgIconComponent
  label: string
  active?: boolean
  onClick?: () => void
}

export default function SidebarNavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: SidebarNavItemProps) {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        borderRadius: '8px',
        px: 1.25,
        py: 1,
        minHeight: 40,
        backgroundColor: active ? colors.primary.dark : 'transparent',
        '&:hover': {
          backgroundColor: active ? colors.primary.dark : 'rgba(255, 255, 255, 0.05)',
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 22, color: colors.neutral.lighter }}>
        <Icon sx={{ fontSize: 16 }} />
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: 16,
          lineHeight: '24px',
          fontWeight: active ? 700 : 400,
          color: colors.neutral.lighter,
        }}
      />
    </ListItemButton>
  )
}

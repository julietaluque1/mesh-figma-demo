import { Box, Button, Typography, List, Avatar } from '@mui/material'
import {
  Dashboard,
  Description,
  Code,
  Key,
  Article,
  HelpOutline,
  Add,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@mui/icons-material'
import { useState } from 'react'
import { colors } from '../theme'
import SidebarNavItem from './SidebarNavItem'
import MeshLogo from './MeshLogo'
import NewOrderDropdown from './NewOrderDropdown'
import UserProfileDropdown from './UserProfileDropdown'

interface SidebarProps {
  activeItem?: string
  onNavigate?: (item: string) => void
}

export default function Sidebar({ activeItem = 'Dashboard', onNavigate }: SidebarProps) {
  const [newOrderAnchorEl, setNewOrderAnchorEl] = useState<null | HTMLElement>(null)
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null)

  const handleNavClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item)
    }
  }

  const handleNewOrderClick = (event: React.MouseEvent<HTMLElement>) => {
    setNewOrderAnchorEl(event.currentTarget)
  }

  const handleNewOrderClose = () => {
    setNewOrderAnchorEl(null)
  }

  const handleNewOrderSelect = (option: string) => {
    console.log('New Order selected:', option)
    // Handle the selection here
  }

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget)
  }

  const handleProfileClose = () => {
    setProfileAnchorEl(null)
  }

  const handleProfileSelect = (option: string) => {
    console.log('Profile option selected:', option)
    // Handle the selection here
  }

  return (
    <Box
      sx={{
        width: 268,
        height: '100vh',
        backgroundColor: colors.primary.main,
        display: 'flex',
        flexDirection: 'column',
        pt: 4,
        px: 2,
        pb: 4,
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 4 }}>
        <MeshLogo />
      </Box>

      {/* New Order Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleNewOrderClick}
        startIcon={<Add sx={{ fontSize: 16 }} />}
        endIcon={<KeyboardArrowDown sx={{ fontSize: 16 }} />}
        sx={{
          backgroundColor: colors.secondary.main,
          color: colors.neutral.lighter,
          borderRadius: '8px',
          py: 1.25,
          px: 5,
          textTransform: 'none',
          fontSize: 16,
          lineHeight: '24px',
          fontWeight: 500,
          mb: 4,
          '&:hover': {
            backgroundColor: colors.secondary.dark,
          },
        }}
      >
        New Order
      </Button>

      {/* New Order Dropdown */}
      <NewOrderDropdown
        anchorEl={newOrderAnchorEl}
        open={Boolean(newOrderAnchorEl)}
        onClose={handleNewOrderClose}
        onSelect={handleNewOrderSelect}
      />

      {/* General Section */}
      <Box
        sx={{
          borderBottom: `1px solid #263865`,
          pb: 3,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 400,
            color: colors.primary.medium,
            mb: 2,
          }}
        >
          GENERAL
        </Typography>
        <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <SidebarNavItem
            icon={Dashboard}
            label="Dashboard"
            active={activeItem === 'Dashboard'}
            onClick={() => handleNavClick('Dashboard')}
          />
          <SidebarNavItem
            icon={Description}
            label="Orders"
            active={activeItem === 'Orders'}
            onClick={() => handleNavClick('Orders')}
          />
        </List>
      </Box>

      {/* For Developers Section */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 400,
            color: colors.primary.medium,
            mb: 2,
          }}
        >
          FOR DEVELOPERS
        </Typography>
        <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <SidebarNavItem
            icon={Code}
            label="Playground"
            active={activeItem === 'Playground'}
            onClick={() => handleNavClick('Playground')}
          />
          <SidebarNavItem
            icon={Key}
            label="API Keys"
            active={activeItem === 'API Keys'}
            onClick={() => handleNavClick('API Keys')}
          />
          <SidebarNavItem
            icon={Article}
            label="Documents"
            active={activeItem === 'Documents'}
            onClick={() => handleNavClick('Documents')}
          />
        </List>
      </Box>

      {/* Spacer to push bottom section down */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Bottom Section: Help & User Info */}
      <Box
        sx={{
          borderTop: `1px solid #263865`,
          pt: 2,
        }}
      >
        <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1, mb: 1 }}>
          <SidebarNavItem
            icon={HelpOutline}
            label="Help & Support"
            active={activeItem === 'Help & Support'}
            onClick={() => handleNavClick('Help & Support')}
          />
        </List>

        {/* User Info */}
        <Box
          onClick={handleProfileClick}
          sx={{
            backgroundColor: 'transparent',
            borderRadius: '8px',
            px: 1.25,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flex: 1, minWidth: 0 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: colors.primary.medium,
                flexShrink: 0,
                fontSize: 14,
              }}
            >
              JD
            </Avatar>
            <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: '24px',
                  fontWeight: 400,
                  color: colors.neutral.lighter,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                John Doe
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: '16px',
                  fontWeight: 400,
                  color: colors.neutral.lighter,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                johndoe@company.com
              </Typography>
            </Box>
          </Box>
          <KeyboardArrowDown sx={{ fontSize: 16, color: colors.neutral.lighter, flexShrink: 0 }} />
        </Box>

        {/* User Profile Dropdown */}
        <UserProfileDropdown
          anchorEl={profileAnchorEl}
          open={Boolean(profileAnchorEl)}
          onClose={handleProfileClose}
          onSelect={handleProfileSelect}
        />
      </Box>
    </Box>
  )
}

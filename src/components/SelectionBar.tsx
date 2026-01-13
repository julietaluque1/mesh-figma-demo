import { Box, Typography, Checkbox, Button } from '@mui/material'
import { InfoOutlined, Close, FileDownloadOutlined } from '@mui/icons-material'
import { colors, typography } from '../theme'

interface SelectionBarProps {
  selectedCount: number
  totalCount: number
  onSelectAll: () => void
  onExport: () => void
  onClose: () => void
}

export default function SelectionBar({
  selectedCount,
  totalCount,
  onSelectAll,
  onExport,
  onClose,
}: SelectionBarProps) {
  const isExportDisabled = selectedCount === 0
  const allSelected = selectedCount === totalCount && totalCount > 0

  return (
    <Box
      sx={{
        backgroundColor: '#E9F2FD',
        borderRadius: '8px',
        p: 2,
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        mb: 3,
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      {/* Left section: Checkbox + count + Select all */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Checkbox
            checked={allSelected}
            indeterminate={selectedCount > 0 && !allSelected}
            sx={{
              p: 1,
              color: colors.primary.dark,
              '&.Mui-checked': {
                color: colors.primary.dark,
              },
              '&.MuiCheckbox-indeterminate': {
                color: colors.primary.dark,
              },
            }}
          />
          <Typography
            sx={{
              fontSize: typography.button.bt1.fontSize,
              lineHeight: typography.button.bt1.lineHeight,
              fontWeight: typography.button.bt1.fontWeight,
              color: colors.neutral.darker,
            }}
          >
            {selectedCount} selected
          </Typography>
          <Button
            variant="text"
            onClick={onSelectAll}
            sx={{
              fontSize: typography.button.bt1.fontSize,
              lineHeight: typography.button.bt1.lineHeight,
              fontWeight: typography.button.bt1.fontWeight,
              color: colors.secondary.main,
              textTransform: 'none',
              minWidth: 'auto',
              p: 0,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            {allSelected ? 'Unselect all' : 'Select all'}
          </Button>
        </Box>

        {/* Middle section: Info icon + Export limit text */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <InfoOutlined
            sx={{
              fontSize: 20,
              color: colors.neutral.darker,
            }}
          />
          <Typography
            sx={{
              fontSize: typography.button.bt1.fontSize,
              lineHeight: typography.button.bt1.lineHeight,
              fontWeight: typography.button.bt1.fontWeight,
              color: colors.neutral.darker,
            }}
          >
            Export limit: 5,000 orders
          </Typography>
        </Box>
      </Box>

      {/* Right section: Export button + Close icon */}
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Button
          variant="outlined"
          disabled={isExportDisabled}
          onClick={onExport}
          startIcon={<FileDownloadOutlined sx={{ fontSize: 16 }} />}
          sx={{
            borderColor: colors.primary.medium,
            color: isExportDisabled ? colors.primary.medium : colors.primary.main,
            fontSize: typography.button.bt1.fontSize,
            lineHeight: typography.button.bt1.lineHeight,
            fontWeight: typography.button.bt1.fontWeight,
            textTransform: 'none',
            borderRadius: '8px',
            px: 2,
            py: 1.25,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              borderColor: colors.primary.dark,
              backgroundColor: 'transparent',
            },
            '&.Mui-disabled': {
              borderColor: colors.primary.medium,
              color: colors.primary.medium,
            },
          }}
        >
          Export orders
        </Button>
        <Close
          onClick={onClose}
          sx={{
            fontSize: 16,
            color: colors.text.darker,
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              opacity: 0.7,
              transform: 'scale(1.1)',
            },
          }}
        />
      </Box>
    </Box>
  )
}

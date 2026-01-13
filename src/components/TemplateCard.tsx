import { Box, Typography } from '@mui/material'
import { Description } from '@mui/icons-material'
import { colors, typography } from '../theme'

interface TemplateCardProps {
  templateName: string
  description?: string
  isSelected: boolean
  isRecentlyUsed: boolean
  onSelect: () => void
}

export default function TemplateCard({
  templateName,
  description,
  isSelected,
  isRecentlyUsed,
  onSelect,
}: TemplateCardProps) {
  return (
    <Box
      onClick={onSelect}
      sx={{
        backgroundColor: isSelected ? '#E9F2FD' : 'white',
        border: `1px solid ${isSelected ? colors.info.main : colors.neutral.main}`,
        borderRadius: '8px',
        px: 1.5,
        py: 2,
        display: 'flex',
        gap: 1.25,
        alignItems: 'center',
        height: '68px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          backgroundColor: colors.info.light,
          borderRadius: '64px',
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Description
          sx={{
            fontSize: 20,
            color: colors.secondary.main,
          }}
        />
      </Box>

      {/* Template Name */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: typography.headline.h6.fontSize,
            lineHeight: typography.headline.h6.lineHeight,
            fontWeight: typography.headline.h6.fontWeight,
            color: colors.primary.main,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {templateName}
        </Typography>
        {description && (
          <Typography
            sx={{
              fontSize: typography.body.b3.fontSize,
              lineHeight: typography.body.b3.lineHeight,
              fontWeight: typography.body.b3.fontWeight,
              color: colors.neutral.darker,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {/* Recently used badge */}
      {isRecentlyUsed && (
        <Box
          sx={{
            backgroundColor: colors.primary.light,
            borderRadius: '100px',
            px: 1.25,
            py: 0.5,
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: typography.inputs.in3.fontSize,
              lineHeight: typography.inputs.in3.lineHeight,
              fontWeight: typography.inputs.in3.fontWeight,
              color: colors.neutral.darker,
            }}
          >
            Recently used
          </Typography>
        </Box>
      )}
    </Box>
  )
}

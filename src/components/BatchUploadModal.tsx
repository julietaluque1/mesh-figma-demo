import { Box, Typography, Button, Modal, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useState } from 'react'
import TemplateCard from './TemplateCard'
import { colors, typography } from '../theme'

interface BatchUploadModalProps {
  open: boolean
  onClose: () => void
}

const templates = [
  {
    id: 'license-verification',
    name: 'License Verification',
    description: '',
    isRecentlyUsed: true,
  },
  {
    id: 'business-verification',
    name: 'Business Verification',
    description: '',
    isRecentlyUsed: false,
  },
]

export default function BatchUploadModal({ open, onClose }: BatchUploadModalProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleTemplateSelect = (templateId: string) => {
    // Toggle selection: if already selected, deselect it
    setSelectedTemplate(selectedTemplate === templateId ? null : templateId)
  }

  const handleContinue = () => {
    if (selectedTemplate) {
      console.log('Selected template:', selectedTemplate)
      // TODO: Move to step 2
    }
  }

  const handleClose = () => {
    setSelectedTemplate(null)
    onClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: colors.neutral.lighter,
          borderRadius: '12px',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          width: '90%',
          maxWidth: '512px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          outline: 'none',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 3,
            borderBottom: `1px solid ${colors.neutral.main}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: typography.headline.h2.fontSize,
                lineHeight: typography.headline.h2.lineHeight,
                fontWeight: typography.headline.h2.fontWeight,
                color: colors.text.darker,
                mb: 0.5,
              }}
            >
              Upload a batch
            </Typography>
            <Typography
              sx={{
                fontSize: typography.body.b3.fontSize,
                lineHeight: typography.body.b3.lineHeight,
                fontWeight: typography.body.b3.fontWeight,
                color: colors.neutral.darker,
              }}
            >
              Step 1 of 2
            </Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{
              color: colors.text.darker,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Content */}
        <Box
          sx={{
            p: 3,
            flex: 1,
            overflow: 'auto',
          }}
        >
          {/* Section Title */}
          <Typography
            sx={{
              fontSize: typography.body.b1.fontSize,
              lineHeight: typography.body.b1.lineHeight,
              fontWeight: 700,
              color: colors.text.darker,
              mb: 3,
            }}
          >
            Select your template
          </Typography>

          {/* Template Cards Grid */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                templateName={template.name}
                description={template.description}
                isSelected={selectedTemplate === template.id}
                isRecentlyUsed={template.isRecentlyUsed}
                onSelect={() => handleTemplateSelect(template.id)}
              />
            ))}
          </Box>
        </Box>

        {/* Footer with buttons */}
        <Box
          sx={{
            p: 3,
            borderTop: `1px solid ${colors.neutral.main}`,
            display: 'flex',
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={handleClose}
            fullWidth
            sx={{
              borderColor: colors.primary.main,
              color: colors.primary.main,
              fontSize: typography.button.bt1.fontSize,
              lineHeight: typography.button.bt1.lineHeight,
              fontWeight: typography.button.bt1.fontWeight,
              textTransform: 'none',
              borderRadius: '8px',
              py: 1.25,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                borderColor: colors.primary.dark,
                backgroundColor: 'transparent',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleContinue}
            disabled={!selectedTemplate}
            fullWidth
            sx={{
              backgroundColor: selectedTemplate ? colors.primary.main : colors.primary.medium,
              color: colors.neutral.lighter,
              fontSize: typography.button.bt1.fontSize,
              lineHeight: typography.button.bt1.lineHeight,
              fontWeight: typography.button.bt1.fontWeight,
              textTransform: 'none',
              borderRadius: '8px',
              py: 1.25,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: selectedTemplate ? colors.primary.dark : colors.primary.medium,
              },
              '&.Mui-disabled': {
                backgroundColor: colors.primary.medium,
                color: colors.primary.light,
              },
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

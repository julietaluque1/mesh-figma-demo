import {
  Box,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material'
import {
  Person,
  CalendarToday,
  CheckCircle,
  ContentCopy,
  InfoOutlined,
  FiberManualRecord,
} from '@mui/icons-material'
import { colors } from '../theme'
import StatusLabel from './StatusLabel'

type SystemStatus = 'in-progress' | 'cancelled' | 'failed'
type OrderResult = 'approved' | 'needs-review' | 'unable-to-verify'

interface OrderCardProps {
  orderName: string
  orderId: string
  // Status - either system status OR order result, never both
  systemStatus?: SystemStatus
  orderResult?: OrderResult
  // Order details
  type: string
  createdBy: string
  createdOn: string
  lastUpdated: string
  jurisdiction: string
  customerAlias: string
  // Monitoring - only visible when systemStatus is 'in-progress'
  isMonitoring?: boolean
  // Selection mode
  selectable?: boolean
  selected?: boolean
  onSelect?: (selected: boolean) => void
  // Click handlers
  onCopyOrderId?: () => void
  onCopyCustomerAlias?: () => void
}

export default function OrderCard({
  orderName,
  orderId,
  systemStatus,
  orderResult,
  type,
  createdBy,
  createdOn,
  lastUpdated,
  jurisdiction,
  customerAlias,
  isMonitoring = false,
  selectable = false,
  selected = false,
  onSelect,
  onCopyOrderId,
  onCopyCustomerAlias,
}: OrderCardProps) {
  const showMonitoring = systemStatus === 'in-progress' && isMonitoring

  return (
    <Box
      sx={{
        backgroundColor: selected ? '#E9F2FD' : colors.neutral.light,
        border: `1px solid ${selected ? colors.info.main : colors.neutral.main}`,
        borderRadius: '8px',
        px: 2,
        py: 1.5,
        display: 'flex',
        gap: 1,
        alignItems: 'flex-start',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      {/* Checkbox (selection mode) */}
      {selectable && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 1,
            width: 20,
            height: 20,
          }}
        >
          <Checkbox
            checked={selected}
            onChange={(e) => onSelect?.(e.target.checked)}
            size="small"
            sx={{
              p: 0,
              color: colors.primary.dark,
              '&.Mui-checked': {
                color: colors.primary.dark,
              },
            }}
          />
        </Box>
      )}

      {/* Order details */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* Title row */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
            {/* Order name + info icon */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'baseline' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: colors.text.darker,
                }}
              >
                {orderName}
              </Typography>
              <Tooltip
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">Order ID: {orderId}</Typography>
                    <IconButton
                      size="small"
                      onClick={onCopyOrderId}
                      sx={{ color: 'white', p: 0 }}
                    >
                      <ContentCopy sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Box>
                }
                arrow
              >
                <InfoOutlined
                  sx={{
                    fontSize: 16,
                    color: colors.text.medium,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      color: colors.text.darker,
                    },
                  }}
                />
              </Tooltip>
            </Box>

            {/* Status label (either system status OR order result) */}
            {systemStatus && <StatusLabel status={systemStatus} />}
            {orderResult && <StatusLabel status={orderResult} />}
          </Box>

          {/* Right side: Monitoring only */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {/* Monitoring indicator */}
            {showMonitoring && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 0.75,
                  py: 0.5,
                  borderRadius: '80px',
                }}
              >
                <FiberManualRecord
                  sx={{
                    fontSize: 12,
                    color: colors.secondary.main,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: '16px',
                    fontWeight: 600,
                    color: colors.secondary.main,
                  }}
                >
                  Monitoring
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Metadata row */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Type */}
          <Typography
            sx={{
              fontSize: 12,
              lineHeight: '16px',
              fontWeight: 400,
              color: colors.neutral.darker,
            }}
          >
            Type: {type}
          </Typography>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 18, alignSelf: 'center' }}
          />

          {/* Created by */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Person sx={{ fontSize: 16, color: colors.neutral.darker }} />
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 400,
                color: colors.neutral.darker,
              }}
            >
              {createdBy}
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 18, alignSelf: 'center' }}
          />

          {/* Created on */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <CalendarToday sx={{ fontSize: 16, color: colors.neutral.darker }} />
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 400,
                color: colors.neutral.darker,
              }}
            >
              Created on: {createdOn}
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 18, alignSelf: 'center' }}
          />

          {/* Last updated */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <CheckCircle sx={{ fontSize: 16, color: colors.neutral.darker }} />
            <Typography
              sx={{
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 400,
                color: colors.neutral.darker,
              }}
            >
              Last updated: {lastUpdated}
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 18, alignSelf: 'center' }}
          />

          {/* Jurisdiction */}
          <Typography
            sx={{
              fontSize: 12,
              lineHeight: '16px',
              fontWeight: 400,
              color: colors.neutral.darker,
            }}
          >
            Jurisdiction: {jurisdiction}
          </Typography>
        </Box>

        {/* Customer Alias row */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: 12,
              lineHeight: '16px',
              fontWeight: 400,
              color: colors.neutral.darker,
            }}
          >
            Customer Alias: {customerAlias}
          </Typography>
          <IconButton
            size="small"
            onClick={onCopyCustomerAlias}
            sx={{
              p: 0,
              ml: 0.5,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'transparent',
                transform: 'scale(1.2)',
              },
            }}
          >
            <ContentCopy sx={{ fontSize: 12, color: colors.neutral.darker }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

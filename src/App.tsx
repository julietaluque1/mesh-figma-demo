import { Box, Typography, Button } from '@mui/material'
import { useState } from 'react'
import { Add, KeyboardArrowDown, FilterList, SwapVert } from '@mui/icons-material'
import Sidebar from './components/Sidebar'
import TopNavBar from './components/TopNavBar'
import OrderCard from './components/OrderCard'
import NewOrderDropdown from './components/NewOrderDropdown'
import Input from './components/Input'
import { colors, typography } from './theme'

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard')
  const [newOrderAnchor, setNewOrderAnchor] = useState<null | HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'all-orders' | 'batches'>('all-orders')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    console.log('Search query:', query)
  }

  const handleNotificationClick = () => {
    console.log('Notification clicked')
  }

  const handleNewOrderClick = (event: React.MouseEvent<HTMLElement>) => {
    setNewOrderAnchor(event.currentTarget)
  }

  const handleNewOrderClose = () => {
    setNewOrderAnchor(null)
  }

  const handleNewOrderSelect = (option: string) => {
    console.log('New order option selected:', option)
    setNewOrderAnchor(null)
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onNavigate={setActiveItem} />

      {/* Main Content Area */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top Navigation Bar */}
        <TopNavBar
          trialUser={true}
          creditsLeft={8}
          onSearch={handleSearch}
          onNotificationClick={handleNotificationClick}
        />

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            overflow: 'auto',
            backgroundColor: colors.neutral.lighter,
          }}
        >
          {/* Page Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                color: colors.text.darker,
              }}
            >
              Orders Management
            </Typography>
            <Button
              variant="contained"
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
                '&:hover': {
                  backgroundColor: colors.secondary.dark,
                },
              }}
            >
              New Order
            </Button>
          </Box>

          <NewOrderDropdown
            anchorEl={newOrderAnchor}
            open={Boolean(newOrderAnchor)}
            onClose={handleNewOrderClose}
            onSelect={handleNewOrderSelect}
          />

          {/* Tabs */}
          <Box
            sx={{
              display: 'flex',
              mb: 3,
            }}
          >
            <Box
              onClick={() => setActiveTab('all-orders')}
              sx={{
                px: 2,
                pb: 1,
                cursor: 'pointer',
                borderBottom: activeTab === 'all-orders' ? `2px solid ${colors.primary.main}` : `1px solid ${colors.primary.medium}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: typography.inputs.in1.fontSize,
                  lineHeight: typography.inputs.in1.lineHeight,
                  fontWeight: typography.inputs.in1.fontWeight,
                  color: activeTab === 'all-orders' ? colors.primary.dark : colors.primary.main,
                }}
              >
                All orders (8)
              </Typography>
            </Box>
            <Box
              onClick={() => setActiveTab('batches')}
              sx={{
                px: 2,
                pb: 1,
                cursor: 'pointer',
                borderBottom: activeTab === 'batches' ? `2px solid ${colors.primary.main}` : `1px solid ${colors.primary.medium}`,
              }}
            >
              <Typography
                sx={{
                  fontSize: typography.inputs.in1.fontSize,
                  lineHeight: typography.inputs.in1.lineHeight,
                  fontWeight: typography.inputs.in1.fontWeight,
                  color: activeTab === 'batches' ? colors.primary.dark : colors.primary.main,
                }}
              >
                Batches
              </Typography>
            </Box>
          </Box>

          {/* Search Bar with Filters and Sort */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
              gap: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Input
                placeholder="Search by Order ID, Business Name, License Number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="text"
                startIcon={<FilterList />}
                sx={{
                  color: colors.secondary.main,
                  fontSize: typography.button.bt1.fontSize,
                  lineHeight: typography.button.bt1.lineHeight,
                  fontWeight: typography.button.bt1.fontWeight,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(48, 140, 248, 0.08)',
                  },
                }}
              >
                Filters
              </Button>
              <Button
                variant="text"
                startIcon={<SwapVert />}
                sx={{
                  color: colors.secondary.main,
                  fontSize: typography.button.bt1.fontSize,
                  lineHeight: typography.button.bt1.lineHeight,
                  fontWeight: typography.button.bt1.fontWeight,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(48, 140, 248, 0.08)',
                  },
                }}
              >
                Sort by
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* System Status: In Progress with Monitoring */}
            <OrderCard
              orderName="Order with In Progress + Monitoring"
              orderId="mesh_order_001"
              systemStatus="in-progress"
              isMonitoring={true}
              type="PLV + BEV"
              createdBy="Sarah Johnson"
              createdOn="2024-11-01"
              lastUpdated="2024-11-13"
              jurisdiction="NY - CA"
              customerAlias="d371faa4-b9d4-47bf-bef3-24cdf49f0144"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* System Status: In Progress without Monitoring */}
            <OrderCard
              orderName="Order with In Progress (no monitoring)"
              orderId="mesh_order_002"
              systemStatus="in-progress"
              isMonitoring={false}
              type="PLV + BEV"
              createdBy="John Doe"
              createdOn="2024-11-05"
              lastUpdated="2024-11-14"
              jurisdiction="TX - FL"
              customerAlias="a123bcde-5678-90ab-cdef-1234567890ab"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* System Status: Cancelled */}
            <OrderCard
              orderName="Order with Cancelled Status"
              orderId="mesh_order_003"
              systemStatus="cancelled"
              type="PLV"
              createdBy="Alice Smith"
              createdOn="2024-11-02"
              lastUpdated="2024-11-10"
              jurisdiction="CA"
              customerAlias="b987fedc-4321-09ba-fedc-0987654321ba"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* System Status: Failed */}
            <OrderCard
              orderName="Order with Failed Status"
              orderId="mesh_order_004"
              systemStatus="failed"
              type="BEV"
              createdBy="Bob Williams"
              createdOn="2024-11-03"
              lastUpdated="2024-11-12"
              jurisdiction="NY"
              customerAlias="c456abcd-7890-12ef-ghij-3456789012cd"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* Order Result: Approved */}
            <OrderCard
              orderName="Order with Approved Result"
              orderId="mesh_order_005"
              orderResult="approved"
              type="PLV + BEV"
              createdBy="Emma Davis"
              createdOn="2024-10-28"
              lastUpdated="2024-11-05"
              jurisdiction="WA - OR"
              customerAlias="d789efgh-0123-45ij-klmn-6789012345ef"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* Order Result: Needs Review */}
            <OrderCard
              orderName="Order with Needs Review Result"
              orderId="mesh_order_006"
              orderResult="needs-review"
              type="PLV"
              createdBy="Michael Brown"
              createdOn="2024-10-30"
              lastUpdated="2024-11-07"
              jurisdiction="IL - MI"
              customerAlias="e012ijkl-3456-78mn-opqr-0123456789gh"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* Order Result: Unable to Verify */}
            <OrderCard
              orderName="Order with Unable to Verify Result"
              orderId="mesh_order_007"
              orderResult="unable-to-verify"
              type="BEV"
              createdBy="Sophia Martinez"
              createdOn="2024-10-25"
              lastUpdated="2024-11-03"
              jurisdiction="AZ - NM"
              customerAlias="f345mnop-6789-01qr-stuv-4567890123ij"
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />

            {/* Selectable + Selected */}
            <OrderCard
              orderName="Selectable Order (Selected)"
              orderId="mesh_order_008"
              orderResult="approved"
              type="PLV + BEV"
              createdBy="David Lee"
              createdOn="2024-11-01"
              lastUpdated="2024-11-08"
              jurisdiction="GA - SC"
              customerAlias="g678qrst-0123-45uv-wxyz-7890123456kl"
              selectable={true}
              selected={true}
              onSelect={(selected) => console.log('Selected:', selected)}
              onCopyOrderId={() => console.log('Copy order ID')}
              onCopyCustomerAlias={() => console.log('Copy customer alias')}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App

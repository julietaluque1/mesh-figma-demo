import { Box, Typography, Button, Stack } from '@mui/material'

function App() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h1" gutterBottom>
        Mesh Design System
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Demo project for Figma to Code workflow
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
      </Stack>

      {/* Add your Figma components here */}
    </Box>
  )
}

export default App

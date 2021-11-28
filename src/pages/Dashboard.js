import { Box, Container, Typography } from "@material-ui/core";

export default function Dashboard() {
  return (
    <div>
      <Box
        sx={{
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Typography>This is the dashboard</Typography>
        </Container>
      </Box>
    </div>
  );
}

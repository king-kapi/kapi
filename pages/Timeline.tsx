import type User from '@/src/models/User';
import {
  Unstable_Grid2 as Grid2,
  Paper,
  Avatar,
  Button,
  Box,
  Stack,
  Tabs,
  Tab,
} from '@mui/material';
import { useState } from 'react';
import { deepOrange } from '@mui/material/colors';
import Image from 'next/image';
import styles from '@/styles/Timeline.module.css';

/**
 * Type alias that omits all the id's
 */
type MockUser = {
  [K in keyof User]: User[K] extends unknown[]
    ? Omit<User[K][number], 'id' | '_id'>[]
    : Omit<User[K], 'id' | '_id'>;
};
type PostProps = {
  user: MockUser;
  body: string;
  imageURLs: string[];
  timestamp: Date;
};

const mockUser: MockUser = {
  email: 'someEmail@mail.com',
  username: 'johndoe66222',
  tag: '@LMAO',
  bio: 'Some bio',
  interests: [{ name: 'interest 1' }, { name: 'interest 2' }],
  avatar: 'https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg', // cat pfp
  friends: [{ username: 'Jane Doe' }],
  displayName: 'John Doe',
};

const mockProps: PostProps = {
  user: mockUser,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  imageURLs: [],
  timestamp: new Date(2023, 2, 17),
};

const listOfMockProps = new Array(20).fill(mockProps);

function TabPanel({
  children,
  value,
  index,
  ...other
}: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

/**
 * A post inside the user's timeline TODO: where will the timeline be? this is needed for routing
 * @param props
 * @returns
 */
function Post({ user, body, imageURLs }: PostProps) {
  return (
    <Grid2
      container
      spacing={2}
      columns={12}
      //   sx={{
      //     '--Grid-borderWidth': '1px',
      //     borderTop: 'var(--Grid-borderWidth) solid',
      //     borderLeft: 'var(--Grid-borderWidth) solid',
      //     borderColor: 'divider',
      //     '& > div': {
      //       borderRight: 'var(--Grid-borderWidth) solid',
      //       borderBottom: 'var(--Grid-borderWidth) solid',
      //       borderColor: 'divider',
      //     },
      //   }}
    >
      <Grid2 display="flex" xs={1} justifyContent={'center'}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>JD</Avatar>
      </Grid2>
      <Grid2 xs={11}>
        <div className={styles.bodyText}>
          <b>{user.displayName}</b> @{user.username} • 2 days ago
        </div>
        <div>This server name</div>
      </Grid2>

      <Grid2 xs={1}></Grid2>
      <Grid2 xs={11} display="flex">
        <Box>{body}</Box>
      </Grid2>

      <Grid2 xs={12}>
        <Stack direction="row-reverse" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Image src="/pixel_bubble.svg" alt="bruh" width={20} height={20} />}
          >
            Comment
          </Button>
          <Button
            variant="outlined"
            startIcon={<Image src="/pixel_heart.svg" alt="bruh" width={20} height={20} />}
          >
            Like
          </Button>
        </Stack>
      </Grid2>
    </Grid2>
  );
}

// TODO: this technically isn't the timeline, it has the timeline tab
function TimeLine() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <>
      <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
        <Tab label="Timeline" value={0} />
        <Tab label="Explore" value={1} />
      </Tabs>
      <TabPanel index={0} value={currentTab}>
        {listOfMockProps.map((prop, index) => (
          <Box key={index} sx={{ pb: 2 }}>
            <Post {...prop} />
          </Box>
        ))}
      </TabPanel>
      <TabPanel index={1} value={currentTab}>
        <Paper elevation={2} sx={{ p: 3 }}>
          Explore Tab, Nothing yet
        </Paper>
      </TabPanel>
    </>
  );
}

export default TimeLine;

import type {Meta, StoryObj} from '@storybook/react';

import {ReactTeamPage} from './ReactTeamPage';

const meta: Meta<typeof ReactTeamPage> = {
  title: 'React Examples',
  component: ReactTeamPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ReactTeamPage>;

export const Default: Story = {
  args: {
    shirtText: 'SJ JS',
    shirtColor: '#008800',
    sleeveColor: '#008800',
    textColor: '#fff',
  },
};
export const ARS: Story = {
  args: {
    shirtText: 'Emirates',
    shirtColor: '#f00000',
    sleeveColor: '#fff',
    shirtStyle: 'checkered',
    shirtStyleColor: '#dc0001',
    textColor: '#fff',
  },
};
export const AVL: Story = {
  args: {
    shirtText: 'CAZOO',
    shirtColor: '#670e36',
    sleeveColor: '#94bee5',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};

export const BHA: Story = {
  args: {
    shirtText: 'AMERICAN',
    shirtColor: '#398ae7',
    sleeveColor: '#398ae7',
    shirtStyle: 'striped-thin',
    shirtStyleColor: '#fff',
    textColor: '#fff',
  },
};
export const BUR: Story = {
  args: {
    shirtText: ' #|# ',
    shirtColor: '#81204c',
    sleeveColor: '#8bd3f5',
    textColor: '#fff',
  },
};
export const CHE: Story = {
  args: {
    shirtText: '3',
    shirtColor: '#001489',
    sleeveColor: '#001489',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const CRY: Story = {
  args: {
    shirtText: 'W88',
    shirtColor: '#014a97',
    sleeveColor: '#014a97',
    shirtStyle: 'striped',
    shirtStyleColor: '#ff362b',
    textColor: '#fff',
  },
};
export const FUL: Story = {
  args: {
    shirtText: 'BETVICTOR',
    shirtColor: '#fff',
    sleeveColor: '#333',
    shirtStyle: 'plain',
    textColor: '#222',
  },
};
export const LEE: Story = {
  args: {
    shirtText: 'SBOTOP',
    shirtColor: '#ffffff',
    sleeveColor: '#ffffff',
    shirtStyle: 'plain',
    textColor: '#1d4189',
  },
};
export const LEI: Story = {
  args: {
    shirtText: 'THAILAND',
    shirtColor: '#003090',
    sleeveColor: '#003090',
    shirtStyle: 'plain',
    textColor: '#fefefe',
  },
};
export const LIV: Story = {
  args: {
    shirtText: 'Standard &',
    shirtColor: '#e31b23',
    sleeveColor: '#e31b23',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const MCI: Story = {
  args: {
    shirtText: 'ETIHAD',
    shirtColor: '#98c5e9',
    sleeveColor: '#98c5e9',
    shirtStyle: 'plain',
    textColor: '#00285e',
  },
};
export const MUN: Story = {
  args: {
    shirtText: ' CHEVROLET ',
    shirtColor: '#c70101',
    sleeveColor: '#c70101',
    shirtStyle: 'plain',
    textColor: '#fed500',
  },
};
export const NEW: Story = {
  args: {
    shirtText: 'FUN88',
    shirtColor: '#fff',
    sleeveColor: '#333',
    shirtStyle: 'striped',
    shirtStyleColor: '#111',
    textColor: '#00bcf6',
  },
};
export const SHE: Story = {
  args: {
    shirtText: '## USG',
    shirtColor: '#fff',
    sleeveColor: '#fff',
    shirtStyle: 'striped-thick',
    shirtStyleColor: '#e30613',
    textColor: '#111',
  },
};
export const SOU: Story = {
  args: {
    shirtText: 'Sportsbet',
    shirtColor: '#ff0028',
    sleeveColor: '#ff0028',
    shirtStyle: 'single-band',
    shirtStyleColor: '#fff',
    textColor: '#111',
    shirtStyleDirection: 'diagonal-left',
  },
};
export const TOT: Story = {
  args: {
    shirtText: 'AIA',
    shirtColor: '#fff',
    sleeveColor: '#0a225c',
    shirtStyle: 'plain',
    textColor: '#d31145',
  },
};
export const WIG: Story = {
  args: {
    shirtText: 'ideal',
    shirtColor: '#fff',
    sleeveColor: '#002f68',
    shirtStyle: 'striped',
    shirtStyleColor: '#002f68',
    textColor: '#fff',
    textBackgroundColor: '#002f68',
  },
};
export const WHU: Story = {
  args: {
    shirtText: 'betWay',
    shirtColor: '#7d2b3a',
    sleeveColor: '#59b3e4',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const WOL: Story = {
  args: {
    shirtText: 'FiT|#',
    shirtColor: '#fdb913',
    sleeveColor: '#333',
    shirtStyle: 'plain',
    textColor: '#222',
  },
};
export const PSG: Story = {
  args: {
    shirtText: ' All ',
    shirtColor: '#00234a',
    sleeveColor: '#00234a',
    shirtStyle: 'single-band',
    shirtStyleColor: '#cc1339',
    textColor: '#fff',
    shirtStyleDirection: 'vertical',
  },
};
export const ACM: Story = {
  args: {
    shirtText: 'Emirates',
    shirtColor: '#df061b',
    sleeveColor: '#444',
    shirtStyle: 'striped',
    shirtStyleColor: '#222',
    textColor: '#fff',
  },
};
export const BAR: Story = {
  args: {
    shirtText: 'Rakuten',
    shirtColor: '#081868',
    sleeveColor: '#081868',
    shirtStyle: 'striped-thick',
    shirtStyleColor: '#84112b',
    textColor: '#fff',
  },
};
export const FCB: Story = {
  args: {
    shirtText: '-T--- ',
    shirtColor: '#d1122e',
    sleeveColor: '#d1122e',
    shirtStyle: 'plain',
    textColor: '#fff',
  },
};
export const JUV: Story = {
  args: {
    shirtText: 'Jeep',
    shirtColor: '#fff',
    sleeveColor: '#fff',
    shirtStyle: 'striped',
    shirtStyleColor: '#222',
    textColor: '#e1ceaf',
  },
};
export const BVB: Story = {
  args: {
    shirtText: ' 1&1 ',
    shirtColor: '#f6ea32',
    sleeveColor: '#f6ea32',
    shirtStyle: 'dashed',
    shirtStyleColor: '#222',
    shirtStyleDirection: 'diagonal-right',
    textColor: '#fff',
    textBackgroundColor: '#333',
  },
};
export const CAG: Story = {
  args: {
    shirtText: '+ Inchusa',
    shirtColor: '#e4343b',
    sleeveColor: '#fff',
    shirtStyle: 'two-color',
    shirtStyleColor: '#1d2c47',
    textColor: '#fff',
  },
};
export const MON: Story = {
  args: {
    shirtText: ' FEDCOM ',
    shirtColor: '#fff',
    sleeveColor: '#fff',
    shirtStyle: 'two-color',
    shirtStyleColor: '#e53236',
    shirtStyleDirection: 'diagonal-left',
    textColor: '#fff',
  },
};

export const INT: Story = {
  args: {
    shirtText: 'PIRELI',
    shirtColor: '#1756ca',
    sleeveColor: '#1756ca',
    shirtStyle: 'waves',
    shirtStyleColor: '#222',
    textColor: '#fff',
  },
};

export const MSBadge: Story = {
  args: {
    shirtText: 'METASOCCER',
    shirtColor: '#6AD56A',
    sleeveColor: '#000',
    shirtStyle: 'waves',
    shirtStyleColor: '#000',
    textColor: '#ffffff',
    /* eslint-disable max-len */
    badgeBase64: 'data:image/svg+xml;base64,CgkJPHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDggNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgkJCTxwYXRoCgkJCQlkPSJNMTAuOTAxMiA0OEgzNi4xMjFDMzguMTcxOSA0OCAzOS44MjI5IDQ2LjU0NjQgMzkuODIyOSA0NC43NDA5VjMuMjU5MTZDMzkuODIyOSAxLjQ1MzU5IDM4LjE3MTkgMCAzNi4xMjEgMEgxMC45MDEyQzguODUwMjkgMCA3LjE5OTIyIDEuNDUzNTkgNy4xOTkyMiAzLjI1OTE2VjQ0Ljc0MDlDNy4xOTkyMiA0Ni41NDY0IDguODUwMjkgNDggMTAuOTAxMiA0OFoiCgkJCQlmaWxsPSIjNkFENTZBIi8+CgkJCTxwYXRoCgkJCQlkPSJNMTEuNTQ0NiA0Ni44NjEySDM1LjM5NTNDMzcuNDQyMyA0Ni44NjEyIDM5LjA5MDMgNDUuNDE4IDM5LjA5MDMgNDMuNjI1NFY0LjM3NDk4QzM5LjA5MDMgMi41ODIzMyAzNy40NDIzIDEuMTM5MTYgMzUuMzk1MyAxLjEzOTE2SDExLjU0NDZDOS40OTc1OCAxLjEzOTE2IDcuODQ5NjEgMi41ODIzMyA3Ljg0OTYxIDQuMzc0OThWNDMuNjI1NEM3Ljg0OTYxIDQ1LjQxOCA5LjQ5NzU4IDQ2Ljg2MTIgMTEuNTQ0NiA0Ni44NjEyWiIKCQkJCWZpbGw9IiMwQTA4MEMiLz4KCQkJPHBhdGggZD0iTTEzLjA1NjYgNDYuODYxNEgxNC41MjFWMjguMzkzNkgxMy4wNTY2VjQ2Ljg2MTRaIiBmaWxsPSIjNkFENTZBIi8+CgkJCTxwYXRoIGQ9Ik0xNi4zMTI1IDQ2Ljg2MTRIMTcuNzc2OVYyNy4zMzU5SDE2LjMxMjVWNDYuODYxNFoiIGZpbGw9IiM2QUQ1NkEiLz4KCQkJPHBhdGggZD0iTTkuOTYyODkgNDYuODYxNEgxMS40MjczVjI3LjMzNTlIOS45NjI4OVY0Ni44NjE0WiIgZmlsbD0iIzZBRDU2QSIvPgoJCQk8cGF0aCBkPSJNMjIuNTc4MSA0Ni44NjE0SDI0LjA0MjVWMjguMzkzNkgyMi41NzgxVjQ2Ljg2MTRaIiBmaWxsPSIjNkFENTZBIi8+CgkJCTxwYXRoIGQ9Ik0yNS44MzAxIDQ2Ljg2MTRIMjcuMzc1OFYyNy4zMzU5SDI1LjgzMDFWNDYuODYxNFoiIGZpbGw9IiM2QUQ1NkEiLz4KCQkJPHBhdGggZD0iTTE5LjQ4NDQgNDYuODYxNEgyMC45NDg4VjI3LjMzNTlIMTkuNDg0NFY0Ni44NjE0WiIgZmlsbD0iIzZBRDU2QSIvPgoJCQk8cGF0aCBkPSJNMzIuMTc1OCA0Ni44NjE0SDMzLjY0MDJWMjguMzkzNkgzMi4xNzU4VjQ2Ljg2MTRaIiBmaWxsPSIjNkFENTZBIi8+CgkJCTxwYXRoIGQ9Ik0zNS40MzE2IDQ2Ljg2MTRIMzYuODk2VjI3LjMzNTlIMzUuNDMxNlY0Ni44NjE0WiIgZmlsbD0iIzZBRDU2QSIvPgoJCQk8cGF0aCBkPSJNMjkuMDgyIDQ2Ljg2MTRIMzAuNTQ2NFYyNy4zMzU5SDI5LjA4MlY0Ni44NjE0WiIgZmlsbD0iIzZBRDU2QSIvPgoJCQk8cGF0aAoJCQkJZD0iTTMwLjQwOTIgNy45Mjk2OVYxNS4xNzMzSDI3LjU4MjhWMTIuMTFMMjYuNTgzNCAxMy4wNTQzTDI0Ljg4NTQgMTQuNjY2NkwyNC4zMzczIDE1LjE3MzNIMjIuNzQ2OEwyMi4xOTg3IDE0LjY2NjZMMjAuNDY4NSAxMy4wNTQzTDE5LjQwNDYgMTIuMDc1NVYxNS4xNzMzSDE2LjU3ODFWNy45Mjk2OUgxOS40MDQ2TDIzLjU1MjggMTEuNzg3NkwyNy41ODI4IDcuOTI5NjlIMzAuNDA5MloiCgkJCQlmaWxsPSIjNkFENTZBIi8+CgkJCTxwYXRoCgkJCQlkPSJNMjcuMTIwNyAxNi42N0gyMC4yNjQzQzE5LjYxOTQgMTYuNjcgMTkuNDA0NiAxNi40Mzk3IDE5LjQwNDYgMTYuMTc0OEgxNi41NzgxQzE2LjU3ODEgMTYuMTk3OCAxNi41NzgxIDE2LjIwOTQgMTYuNTc4MSAxNi4yMzI0QzE2LjU3ODEgMTcuOTAyMiAxNy42NjM2IDE5LjA3NjkgMTkuNzQ4NCAxOS4wNzY5SDI2LjgxOThDMjcuMzg5NCAxOS4wNzY5IDI3LjYwNDMgMTkuMjk1NyAyNy42MDQzIDE5LjU3MlYyMC4xMDE4QzI3LjYwNDMgMjAuMzg5NiAyNy4zNjc5IDIwLjcwMDYgMjYuMzI1NCAyMC43MDA2SDIyLjUyMTFIMjAuODQ0NkMxOS45NDE5IDIwLjcwMDYgMTkuNTk4IDIwLjM2NjYgMTkuNTQ0MiAxOS45NzUxSDE2Ljc3MTZDMTYuNzcxNiAyMC44OTY0IDE3LjIxMjIgMjMuMjQ1NyAyMC43Njk0IDIzLjI0NTdIMjIuNTIxMUgyNi4zMTQ3QzI5LjMyMzggMjMuMjMzOSAzMC4zNTU1IDIxLjcwMjUgMzAuNDA5MiAyMC4xMDE4VjE5LjU3MkMzMC40MDkyIDE5LjUyNiAzMC40MDkyIDE5LjQ2ODQgMzAuNDA5MiAxOS40MjIzQzMwLjQwOTIgMTcuNzUyNSAyOS4zMDIzIDE2LjY3IDI3LjEyMDcgMTYuNjdaIgoJCQkJZmlsbD0iIzZBRDU2QSIvPgoJCQk8cGF0aAoJCQkJZD0iTTM0LjA2NzUgMjMuNjkzOEwzMi44MTg0IDIyLjk0NjhMMzIuODQwNyAyMS40OTE1TDM0LjExMjEgMjAuNzgzMkwzNS4zNjEzIDIxLjUzMDJMMzUuMzM5IDIyLjk4NTRMMzQuMDY3NSAyMy42OTM4WiIKCQkJCWZpbGw9IiM2QUQ1NkEiLz4KCQkJPHBhdGgKCQkJCWQ9Ik0xMy4yOTQxIDIzLjY5MzhMMTIuMDQ0OSAyMi45NDY4TDEyLjA2NzIgMjEuNDkxNUwxMy4zMzg3IDIwLjc4MzJMMTQuNTg3OCAyMS41MzAyTDE0LjU2NTUgMjIuOTg1NEwxMy4yOTQxIDIzLjY5MzhaIgoJCQkJZmlsbD0iIzZBRDU2QSIvPgoJCQk8cGF0aAoJCQkJZD0iTTM0LjA2NzUgNi4yNDE2M0wzMi44MTg0IDUuNDk0NjdMMzIuODQwNyA0LjAzOTM4TDM0LjExMjEgMy4zMzEwNUwzNS4zNjEzIDQuMDc4MDJMMzUuMzM5IDUuNTMzMjlMMzQuMDY3NSA2LjI0MTYzWiIKCQkJCWZpbGw9IiM2QUQ1NkEiLz4KCQkJPHBhdGgKCQkJCWQ9Ik0xMy4yOTQxIDYuMjQxNjNMMTIuMDQ0OSA1LjQ5NDY3TDEyLjA2NzIgNC4wMzkzOEwxMy4zMzg3IDMuMzMxMDVMMTQuNTg3OCA0LjA3ODAyTDE0LjU2NTUgNS41MzMyOUwxMy4yOTQxIDYuMjQxNjNaIgoJCQkJZmlsbD0iIzZBRDU2QSIvPgoJCTwvc3ZnPgoJ',
  },
};

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

export const WithBadge: Story = {
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

export const WithSponsor: Story = {
  args: {
    shirtColor: '#fff',
    sleeveColor: '#000',
    shirtStyle: 'plain',
    shirtStyleColor: '#fff',
    textColor: '#ffffff',
    /* eslint-disable max-len */
    badgeBase64: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE3NyIgaGVpZ2h0PSIxMzA0IiB2aWV3Qm94PSIwIDAgMTE3NyAxMzA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTE3NyAwVjYxNi43MDRIOTM2LjQ3OVYzNTUuOTA0TDg1MS40MjcgNDM2LjMwMUw3MDYuOTMyIDU3My41NjRMNjYwLjI5MSA2MTYuNzA0SDUyNC45NEw0NzguMjk5IDU3My41NjRMMzMxLjA2IDQzNi4zMDFMMjQwLjUyMSAzNTIuOTYzVjYxNi43MDRIMFYwSDI0MC41MjFMNTkzLjUzIDMyOC40NTFMOTM2LjQ3OSAwSDExNzdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNODk3LjE1NCA3NDQuMTYySDMxMy42ODRDMjU4LjgxMiA3NDQuMTYyIDI0MC41MjEgNzI0LjU1MyAyNDAuNTIxIDcwMi4wMDNIMEMwIDcwMy45NjQgMCA3MDQuOTQ0IDAgNzA2LjkwNUMwIDg0OS4wNzEgOTIuMzY3NSA5NDkuMDc3IDI2OS43ODYgOTQ5LjA3N0g4NzEuNTQ3QzkyMC4wMTcgOTQ5LjA3NyA5MzguMzA4IDk2Ny43MDUgOTM4LjMwOCA5OTEuMjM2VjEwMzYuMzRDOTM4LjMwOCAxMDYwLjg1IDkxOC4xODggMTA4Ny4zMiA4MjkuNDc5IDEwODcuMzJINTA1LjczNUgzNjMuMDY4QzI4Ni4yNDggMTA4Ny4zMiAyNTYuOTgzIDEwNTguODkgMjUyLjQxIDEwMjUuNTVIMTYuNDYxNUMxNi40NjE1IDExMDMuOTkgNTMuOTU3MyAxMzA0IDM1Ni42NjcgMTMwNEg1MDUuNzM1SDgyOC41NjRDMTA4NC42MyAxMzAzLjAyIDExNzIuNDMgMTE3Mi42MiAxMTc3IDEwMzYuMzRWOTkxLjIzNkMxMTc3IDk4Ny4zMTQgMTE3NyA5ODIuNDEyIDExNzcgOTc4LjQ5QzExNzcgODM2LjMyNSAxMDgyLjggNzQ0LjE2MiA4OTcuMTU0IDc0NC4xNjJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K',
    /* eslint-disable max-len */
    sponsorBase64: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk1IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMjk1IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzQ1NV80OTA0OSkiPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMzQ1NV80OTA0OSkiPgo8cGF0aCBkPSJNNTQuNzYwOCAwVjI3LjkwM0g0My4xNzExVjE2LjEwM0wzOS4wNzI5IDE5Ljc0MDZMMzIuMTEwMyAyNS45NTExTDI5Ljg2MjggMjcuOTAzSDIzLjM0MDlMMjEuMDkzNSAyNS45NTExTDEzLjk5ODcgMTkuNzQwNkw5LjYzNjA0IDE1Ljk2OTlWMjcuOTAzSC0xLjk1MzYxVjBIOS42MzYwNEwyNi42NDU5IDE0Ljg2MDlMNDMuMTcxMSAwSDU0Ljc2MDhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNDEuMjc2MiAzMy42Njk5SDEzLjE2MTRDMTAuNTE3NCAzMy42Njk5IDkuNjM2MDQgMzIuNzgyNyA5LjYzNjA0IDMxLjc2MjRILTEuOTUzNjFDLTEuOTUzNjEgMzEuODUxMSAtMS45NTM2MSAzMS44OTU1IC0xLjk1MzYxIDMxLjk4NDJDLTEuOTUzNjEgMzguNDE2NSAyLjQ5NzE3IDQyLjk0MTMgMTEuMDQ2MiA0Mi45NDEzSDQwLjA0MjRDNDIuMzc3OSA0Mi45NDEzIDQzLjI1OTMgNDMuNzg0MiA0My4yNTkzIDQ0Ljg0ODlWNDYuODg5NUM0My4yNTkzIDQ3Ljk5ODUgNDIuMjg5OCA0OS4xOTYyIDM4LjAxNTMgNDkuMTk2MkgyMi40MTU1SDE1LjU0MUMxMS44Mzk0IDQ5LjE5NjIgMTAuNDI5MiA0Ny45MDk4IDEwLjIwODkgNDYuNDAxNUgtMS4xNjA0MUMtMS4xNjA0MSA0OS45NTA0IDAuNjQ2MzQ4IDU5IDE1LjIzMjYgNTlIMjIuNDE1NUgzNy45NzEyQzUwLjMxIDU4Ljk1NTYgNTQuNTQwNCA1My4wNTU2IDU0Ljc2MDggNDYuODg5NVY0NC44NDg5QzU0Ljc2MDggNDQuNjcxNCA1NC43NjA4IDQ0LjQ0OTYgNTQuNzYwOCA0NC4yNzIyQzU0Ljc2MDggMzcuODM5OCA1MC4yMjE5IDMzLjY2OTkgNDEuMjc2MiAzMy42Njk5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTExNSAyNS4zM0gxMDYuOThWNy40MDgyNEgxMDYuNzZMOTkuMjI0NCAyNS4zM0g5Mi45MjI4TDg1LjI5OTEgNy4xODY0NEg4NS4wNzg4VjI1LjMzSDc3LjQxMTFWLTMuMDUxNzZlLTA1SDkwLjA1ODRMOTYuMDUxNSAxNS4xNzE0SDk2LjI3MTlMMTAyLjA4OSAtMy4wNTE3NmUtMDVIMTE1VjI1LjMzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEyNy4xMTkgOS43MTUwMUgxNDUuNTM5VjE1LjA4MjdIMTI3LjExOVYxOS41MTg4SDE0Ni42ODVWMjUuMzNIMTE5LjA1NVYtMy4wNTE3NmUtMDVIMTQ2LjI4OFY1LjgxMTI1SDEyNy4wNzVWOS43MTUwMUgxMjcuMTE5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE3OS41NTkgNi40NzY2NkgxNjguMzY2VjI1LjMzSDE2MC4zNDZWNi40NzY2NkgxNDkuMTUzVi0zLjA1MTc2ZS0wNUgxNzkuNTU5VjYuNDc2NjZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAwLjcxMSAyMS4zMzc2SDE4Ni41MjFMMTg0LjU4MiAyNS4zM0gxNzUuNjM3TDE4OC41NDggLTMuMDUxNzZlLTA1SDE5OC43NzJMMjExLjU1MSAyNS4zM0gyMDIuNjVMMjAwLjcxMSAyMS4zMzc2Wk0xOTMuNDg0IDYuNjU0MUMxOTMuNDg0IDYuNjU0MSAxOTEuOTQyIDEwLjAyNTUgMTg5LjM0MiAxNS41MjYzSDE5Ny44OTFDMTk1LjI0NyAxMC4wMjU1IDE5My43MDQgNi42NTQxIDE5My43MDQgNi42NTQxSDE5My40ODRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOTEuNTEyOSAzNy4zOTYyQzg3LjMyNjUgMzcuMzk2MiA4NS45MTYzIDM4LjI4MzQgODUuOTE2MyAzOS43NDczQzg1LjkxNjMgNDAuOTg5NCA4Ni45Mjk5IDQxLjQ3NzQgODkuMjIxNCA0MS42NTQ5TDk5LjIyNDYgNDIuNTQyMUMxMDQuOTUzIDQzLjAzIDEwOC4xMjYgNDUuMjQ4MSAxMDguMTI2IDUwLjM0OTZDMTA4LjEyNiA1Ny40MDMgMTAyLjM1MyA1OSA5MS45OTc2IDU5QzgyLjA4MjUgNTkgNzYuMzk3OCA1Ny4yNjk5IDc2LjA4OTQgNDkuNzI4NUg4NS4zODc1Qzg1Ljk2MDQgNTIuODMzOCA4OC4zNCA1My40NTQ5IDkyLjM5NDIgNTMuNDU0OUM5Ni44NDUgNTMuNDU0OSA5OC42NTE3IDUyLjY1NjQgOTguNjUxNyA1MC45MjYzQzk4LjY1MTcgNDkuMzczNyA5Ny4yODU2IDQ4Ljg0MTMgOTUuMzkwOCA0OC42NjM5TDg1LjY5NiA0Ny42ODc5QzgwLjA1NTQgNDcuMTExMiA3Ni43MDYzIDQ1LjI0ODEgNzYuNzA2MyA0MC4xOTA5Qzc2LjcwNjMgMzMuODAzIDgyLjY1NTQgMzEuOTg0MiA5MS44MjEzIDMxLjk4NDJDMTAwLjk0MyAzMS45ODQyIDEwNi45OCAzMy43NTg2IDEwNy4yMDEgNDAuNDU3MUg5Ny45NDY2Qzk3LjU1IDM4LjE5NDcgOTUuMzQ2NyAzNy4zOTYyIDkxLjUxMjkgMzcuMzk2MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNDUuNDUxIDQ1LjUxNDJDMTQ1LjQ1MSA1NC43NDEzIDEzOS4xMDYgNTkgMTI3Ljk1NyA1OUMxMTYuODA4IDU5IDExMC40NjIgNTQuNzQxMyAxMTAuNDYyIDQ1LjUxNDJDMTEwLjQ2MiAzNi4yODcyIDExNi44MDggMzIuMDI4NSAxMjcuOTU3IDMyLjAyODVDMTM5LjEwNiAzMS45ODQyIDE0NS40NTEgMzYuMjQyOCAxNDUuNDUxIDQ1LjUxNDJaTTEzNi42MzggNDUuNTE0MkMxMzYuNjM4IDQwLjk4OTQgMTMzLjkwNiAzOC40MTY1IDEyOC4wMDEgMzguNDE2NUMxMjIuMDk2IDM4LjQxNjUgMTE5LjM2MyA0MS4wMzM4IDExOS4zNjMgNDUuNTE0MkMxMTkuMzYzIDUwLjAzOTEgMTIyLjA5NiA1Mi42MTIgMTI4LjAwMSA1Mi42MTJDMTMzLjkwNiA1Mi42MTIgMTM2LjYzOCA0OS45OTQ3IDEzNi42MzggNDUuNTE0MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNjUuMTA1IDM4LjM3MjFDMTU5LjU1MiAzOC4zNzIxIDE1Ni44MiA0MC45ODk0IDE1Ni44MiA0NS40Njk5QzE1Ni44MiA0OS45OTQ3IDE1OS41NTIgNTIuNTY3NiAxNjUuMTA1IDUyLjU2NzZDMTY5LjgyIDUyLjU2NzYgMTcxLjkzNSA1MC4zMDUyIDE3Mi4yIDQ3LjY4NzlIMTgxLjg5NEMxODEuNzE4IDU1LjAwNzUgMTc1Ljg1NyA1OC45NTU2IDE2NS4xNDkgNTguOTU1NkMxNTQuMzUzIDU4Ljk1NTYgMTQ4LjAwNyA1NC42OTcgMTQ4LjAwNyA0NS40Njk5QzE0OC4wMDcgMzYuMjQyOCAxNTQuMzUzIDMxLjk4NDIgMTY1LjE0OSAzMS45ODQyQzE3NS44NTcgMzEuOTg0MiAxODEuNjMgMzUuOTMyMyAxODEuODUgNDIuNzE5NUgxNzIuMjQ0QzE3MS45NzkgNDAuNzY3NiAxNjkuODIgMzguMzcyMSAxNjUuMTA1IDM4LjM3MjFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAxLjUwNCAzOC4zNzIxQzE5NS45NTIgMzguMzcyMSAxOTMuMjIgNDAuOTg5NCAxOTMuMjIgNDUuNDY5OUMxOTMuMjIgNDkuOTk0NyAxOTUuOTUyIDUyLjU2NzYgMjAxLjUwNCA1Mi41Njc2QzIwNi4yMiA1Mi41Njc2IDIwOC4zMzUgNTAuMzA1MiAyMDguNTk5IDQ3LjY4NzlIMjE4LjI5NEMyMTguMTE4IDU1LjAwNzUgMjEyLjI1NyA1OC45NTU2IDIwMS41NDggNTguOTU1NkMxOTAuNzUyIDU4Ljk1NTYgMTg0LjQwNiA1NC42OTcgMTg0LjQwNiA0NS40Njk5QzE4NC40MDYgMzYuMjQyOCAxOTAuNzUyIDMxLjk4NDIgMjAxLjU0OCAzMS45ODQyQzIxMi4yNTcgMzEuOTg0MiAyMTguMDMgMzUuOTMyMyAyMTguMjUgNDIuNzE5NUgyMDguNjQzQzIwOC4zNzkgNDAuNzY3NiAyMDYuMjIgMzguMzcyMSAyMDEuNTA0IDM4LjM3MjFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjI5LjYxOSA0Mi41NDIxSDI0OC4wMzlWNDcuOTA5OEgyMjkuNjE5VjUyLjM0NTlIMjQ5LjE4NVY1OC4xNTcySDIyMS41NTVWMzIuODI3MUgyNDguNzg4VjM4LjYzODRIMjI5LjU3NVY0Mi41NDIxSDIyOS42MTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjg0LjcwMyA1OC4xNTcySDI3NS40MDVMMjcwLjU1OCA1MC4wMzkxSDI2MC44MTlWNTguMTU3MkgyNTIuNzU0VjMyLjgyNzFIMjc0LjE3MUMyODEuMzEgMzIuODI3MSAyODQuMDQyIDM1LjY2NjIgMjg0LjA0MiA0MS4xNjY5QzI4NC4wNDIgNDUuNzgwNSAyODEuNzUxIDQ3LjU1NDkgMjc4LjYyMiA0OC4zMDlWNDguNjE5NkwyODQuNzAzIDU4LjE1NzJaTTI3NS4xODUgNDEuNjk5M0MyNzUuMTg1IDM5Ljk2OTIgMjc0LjM0NyAzOS4xMjYzIDI3Mi4yMzIgMzkuMTI2M0gyNjAuNzc1VjQ0LjI3MjJIMjcyLjIzMkMyNzQuMzQ3IDQ0LjI3MjIgMjc1LjE4NSA0My40MjkzIDI3NS4xODUgNDEuNjk5M1oiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zNDU1XzQ5MDQ5Ij4KPHJlY3Qgd2lkdGg9IjI5NSIgaGVpZ2h0PSI1OSIgZmlsbD0iYmxhY2siLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8zNDU1XzQ5MDQ5Ij4KPHJlY3Qgd2lkdGg9IjI4Ni42NTciIGhlaWdodD0iNTkiIGZpbGw9ImJsYWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS45NTM2MSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
  },
};

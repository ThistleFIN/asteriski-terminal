import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/asteriskiry/asteriski-terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const banner = (args?: string[]): string => {
  return `

               ========        ========
                =******=      =******=
                 =******=    =******=
                  =******=  =******=
                   =******==******=
                    =************=
            =========***********==========
            =****************************=
            =****************************=
            =========************=========
                    =************=
                  =*******==******=
                 =*******=  =******=
                =*******=    =*******=
               =*******=      =*******=
              =========        ========= v${packageJson.version}

Type 'help' to see list of available commands.

Few example commands:
theme
server_info
members_sites

--
Welcome to Asteriski ry's website for members server! 🎉
You have arrived to the web page, which for example contains the instructions on how to get to the actual server and links to members own projects.

To get access to the actual server, please contact Asteriski's current Server Wizard (2022: Roosa Virta, rhvirt@utu.fi).
--
`;
};

export const server_info = (args?: string[]): string => {
  return `
┌─────────────────────────────────────────────────┐
│   Asteriski's members server                    │
├─────────────────────────────────────────────────┤
│ Host name: members.asteriski.fi                 │
│ Server location: Helsinki, Finland              │
│ ISP: Hetzner Online GmbH                        │
│                                                 │
│                                                 │
│ Server Wizard: Roosa Virta rhvirt@utu.fi        │
│ Applications: irssi, weechat, tmux, screen      │
│ Games: typespeed, nethack, nInvaders, nsnake    │
│ bastet, pacman4console                          │
│                                                 │
│ To host a site, create a "public_html" -folder  |
| to you home folder and add index.html to it. For|
| example makstu/public_html/index.html, can be   |
| seen in:                                        │
│ https://members.asteriski.fi/~makstu/           │
└─────────────────────────────────────────────────┘

`;
};

export const members_sites = (args?: string[]): string => {
  return `
┌─────────────────────────────────────────────────┐
│   Asteriski's members sites                     │
├─────────────────────────────────────────────────┤
│ Nickname: makstu                                │
│ Site: https://members.asteriski.fi/~makstu/     │
| Description: Index page -example                │
│                                                 │
│ Nickname: rhvirt                                │
│ Site: https://members.asteriski.fi/~rhvirt/     │
| Description: Still unknown                      │
│                                                 │
│  ---------------------------------------------  │
│ To host a site, create a "public_html" -folder  |
| to you home folder and add index.html to it. For|
| example makstu/public_html/index.html, can be   |
| seen in:                                        │
│ https://members.asteriski.fi/~makstu/           │
└─────────────────────────────────────────────────┘

`;
};
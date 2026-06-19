import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate a real backend delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const connectors = [
    {
      id: 'github',
      name: 'GitHub',
      iconPath: '/assets/icons/github.svg',
      status: 'connected',
      type: 'installed',
    },
    {
      id: 'gmail',
      name: 'Gmail',
      iconPath: '/assets/icons/gmail.svg',
      status: 'not_connected',
      type: 'recommended',
    },
    {
      id: 'notion',
      name: 'Notion',
      iconPath: '/assets/icons/notion.svg',
      status: 'not_connected',
      type: 'recommended',
    },
  ];

  return NextResponse.json(connectors);
}

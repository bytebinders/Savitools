import Link from 'next/link';

const tools = [
  {
    href: '/inspector',
    label: 'Transaction Inspector',
    description: 'Decode and visualize Stellar transactions, operations, and XDR.',
    status: 'MVP',
  },
  {
    href: '/sandbox',
    label: 'Wallet Sandbox',
    description: 'Generate keypairs, fund testnet accounts, create trustlines.',
    status: 'MVP',
  },
  {
    href: '/composer',
    label: 'Transaction Composer',
    description: 'Visual builder for multi-op Stellar transactions.',
    status: 'MVP',
  },
  {
    href: '/webhooks',
    label: 'Webhook Infrastructure',
    description: 'Subscribe to real-time Stellar events with retry delivery.',
    status: 'MVP',
  },
  {
    href: '/simulator',
    label: 'Payment Simulator',
    description: 'Simulate path payments, preview routing and fee estimates.',
    status: 'Planned',
  },
  {
    href: '/multisig',
    label: 'Multi-Sig Builder',
    description: 'Configure signers, thresholds, and test multi-sig policies.',
    status: 'Planned',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold tracking-tight">SaviTools</span>
            <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
              Stellar Developer Workstation
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <Link href="/api" className="hover:text-foreground transition-colors">API</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold tracking-tight mb-2">
            Developer Tools for Stellar
          </h1>
          <p className="text-muted-foreground max-w-xl">
            A professional infrastructure workstation for builders on the Stellar network.
            Inspect transactions, test wallets, manage webhooks, and simulate payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group border border-border rounded-lg p-5 hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium">{tool.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                    tool.status === 'MVP'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {tool.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

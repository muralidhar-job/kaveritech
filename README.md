# Horizons Application - Setup & Troubleshooting Guide

## Project Overview

This is a monorepo application with three main services:
- **Web Frontend** (React + Vite + Tailwind CSS)
- **API Backend** (Express.js)
- **Database** (PocketBase)

---

## Getting Started

### Prerequisites
- Node.js v16+ and npm installed
- Git installed

### Installation

```bash
# Navigate to project directory
cd horizons-export-0c9a7003-5fc9-4ac4-b453-efa31cdfea20

# Install all dependencies
npm install
```

### Running the Application

**Development Mode (All services):**
```bash
npm run dev
```

**Running Services Separately:**

Terminal 1 - Web Frontend:
```bash
npm run dev --prefix apps/web
```
Runs on http://localhost:3000

Terminal 2 - API Backend:
```bash
npm run dev --prefix apps/api
```

Terminal 3 - PocketBase Database:
```bash
npm run dev --prefix apps/pocketbase
```
Admin panel: http://localhost:8090/_/

---

## Error Scenarios & Solutions

### Error 1: Debugger Disconnect Timeout

**Symptom:**
```
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
Waiting for the debugger to disconnect...
```

Server starts but hangs indefinitely with debugger disconnect messages.

**Root Cause:**
The **JavaScript Debug Terminal** in VS Code interferes with the concurrent process manager used to run multiple services simultaneously. The debugger gets attached to the processes and prevents them from properly exiting or running.

**Solutions:**

**Solution A (Recommended): Use Regular PowerShell Terminal**
1. Close the JavaScript Debug Terminal
2. Open a regular PowerShell terminal instead
3. Run the command:
   ```bash
   npm run dev
   ```

**Solution B: Run Services Individually**
Instead of running all services at once, open three separate terminal tabs and run each service independently:

```bash
# Terminal 1
npm run dev --prefix apps/web

# Terminal 2  
npm run dev --prefix apps/api

# Terminal 3
npm run dev --prefix apps/pocketbase
```

**Solution C: Force Kill Stuck Processes**
If the above solutions don't work, kill all Node processes:

```powershell
# In PowerShell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

Then try running again with the regular terminal.

**Solution D: Clear Node Cache**
```bash
# Delete node_modules and reinstall
rm -r node_modules
npm install

# Then run
npm run dev
```

---

## Available Scripts

### Root Level
- `npm run dev` - Run all services concurrently
- `npm run build` - Build the web frontend
- `npm start` - Start production build
- `npm run lint` - Lint all applications

### Web App (`apps/web`)
- `npm run dev` - Development server on port 3000
- `npm run build` - Production build
- `npm run start` - Preview production build
- `npm run lint` - ESLint check

### API (`apps/api`)
- `npm run dev` - Development server
- `npm run start` - Start server
- `npm run lint` - ESLint check

### PocketBase (`apps/pocketbase`)
- `npm run dev` - Development server on port 8090
- `npm run start` - Production server
- `npm run migrations:up` - Run database migrations
- `npm run migrations:revert` - Revert migrations

---

## Environment Variables

Create a `.env` file in the root directory if needed:

```
PB_ENCRYPTION_KEY=your_encryption_key_here
```

Or set as an environment variable:
```powershell
$env:PB_ENCRYPTION_KEY = "your_encryption_key"
```

---

## Troubleshooting Checklist

- [ ] Using regular PowerShell terminal (not JavaScript Debug Terminal)
- [ ] All Node processes killed before restarting
- [ ] node_modules installed: `npm install`
- [ ] No other applications using ports 3000, 8090
- [ ] Environment variables set (if required)
- [ ] Running services individually if concurrent mode fails

---

## Common Port Issues

If you get "port already in use" errors:

**Web (Port 3000):**
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

**PocketBase (Port 8090):**
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 8090).OwningProcess | Stop-Process -Force
```

---

## Development Tips

1. **Hot Reloading**: Web app supports hot module reloading (HMR)
2. **Database Admin Panel**: Access PocketBase UI at http://localhost:8090/_/
3. **API Documentation**: Check API routes in `apps/api/src/routes/`
4. **Component Library**: Radix UI components available in `apps/web/src/components/ui/`

---

## Project Structure

```
.
├── apps/
│   ├── web/                    # React frontend
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   ├── pages/         # Page components
│   │   │   ├── lib/           # Utilities
│   │   │   └── hooks/         # Custom hooks
│   │   └── package.json
│   ├── api/                    # Express.js backend
│   │   ├── src/
│   │   │   ├── routes/        # API endpoints
│   │   │   ├── middleware/    # Express middleware
│   │   │   └── utils/         # Utilities
│   │   └── package.json
│   └── pocketbase/            # PocketBase database
│       ├── pb_migrations/     # Database migrations
│       ├── pb_hooks/          # PocketBase hooks
│       └── package.json
├── package.json               # Root monorepo config
└── README.md                  # This file
```

---

## Support

For issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Try running services individually
4. Check port availability
5. Clear cache and reinstall dependencies


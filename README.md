# CoinWatch

CoinWatch is a React app built with Vite. It displays cryptocurrency market prices and portfolio information using CoinGecko.

## Requirements

- Node.js and npm
- Internet access for live market data
- A CoinGecko API key if your account or API usage requires one

## Setup

1. Open a terminal in the project folder.
2. Install the dependencies:

   ```powershell
   npm.cmd install
   ```

   In PowerShell, use `npm.cmd`. PowerShell may block `npm` with an error saying that `C:\Program Files\nodejs\npm.ps1` cannot be loaded because running scripts are disabled. Running `npm.cmd` avoids that PowerShell script policy issue without changing the system execution policy. In Command Prompt, use `npm` instead.

3. (Optional) Create a `.env` file in the project root and add your CoinGecko key:

   ```env
   COINGECKO_API_KEY=your_coingecko_api_key
   VITE_COINGECKO_API_KEY=your_coingecko_api_key
   ```

   Replace the sample values with your key. The first variable is used by Vite's development proxy; the second is used by the ticker and coin detail requests. Keep `.env` private and do not commit it.

## Run locally

1. After installing dependencies, start the development server from the project folder:

   ```powershell
   npm.cmd run dev
   ```

2. Wait for Vite to print a local URL in the terminal, typically `http://localhost:5173/`.
3. Open that URL in your browser.
4. Keep the terminal running while using the app. Press **Ctrl+C** in that terminal to stop the server.
5. To refresh the app, press **Ctrl+R** in the browser. Market and portfolio data also refresh automatically about once a minute; the ticker refreshes every 30 seconds.

If PowerShell blocks `npm.cmd` too, open Command Prompt in the project folder and run `npm run dev` there.

## Other commands

```powershell
npm.cmd run build
npm.cmd run preview
```

`build` creates the production bundle in `dist/`. Run `preview` after a build to serve that bundle locally.

## bulid app jsx----
import the flie from footer bar in it 
<!--  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
-->
       path="/"
        element={
          <Layout
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            currency={currency}
            setCurrency={setCurrency}
          />
        }
        <!--  -->
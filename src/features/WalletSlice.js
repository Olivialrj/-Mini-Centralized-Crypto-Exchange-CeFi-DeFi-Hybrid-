import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";

// Async thunk to load the wallet balance
export const fetchWalletBalance = createAsyncThunk(
  "wallet/fetchWalletBalance",
  async () => {
    const provider = new ethers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/YOUR_INFURA_KEY"
    );
    const balanceWei = await provider.getBalance(
      "0x0000000000000000000000000000000000000000"
    );
    return ethers.formatEther(balanceWei); // returns string
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    balance: null,
    holdings: [
      { name: "BTC", amount: 0.75, usdValue: 45000, change24h: "+2.3%" },
      { name: "ETH", amount: 10, usdValue: 3500, change24h: "-0.8%" },
      { name: "SOL", amount: 200, usdValue: 6000, change24h: "+5.1%" },
    ],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletBalance.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWalletBalance.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.balance = action.payload;
      })
      .addCase(fetchWalletBalance.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default walletSlice.reducer;

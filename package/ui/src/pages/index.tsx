import { Box } from "@mui/system";
import { Fragment } from "react";

export default function Root() {
  return (
    <Fragment>
      <Box py={2}>
        As a decentralized ETF fund, EquiRock could be designed to provide
        investors with exposure to a diversified portfolio of assets while
        relying on arbitrageurs to maintain the fund's balance and stability.
        The fund could operate on a blockchain-based platform, allowing for
        transparent and secure trading and settlement processes.
      </Box>

      <Box py={2}>
        EquiRock's decentralized structure would mean that investors could buy
        and sell shares of the fund directly, without the need for an
        intermediary like a traditional investment management firm. Instead, the
        fund's rebalancing would be done automatically by arbitrageurs who would
        take advantage of price discrepancies between the fund's assets and its
        market price.
      </Box>

      <Box py={2}>
        Investors in EquiRock would benefit from the stability and
        diversification of an ETF, along with the potential for lower fees and
        greater transparency afforded by a decentralized structure. The fund
        could be particularly attractive to those who value decentralization and
        blockchain technology, as well as those who are looking for a more
        passive and diversified approach to investing.
      </Box>
    </Fragment>
  );
}

import { useQuery } from "react-query";
import { positionService } from "../services/positionService";

import { POSITION_CACHE_KEY } from "../cache/positionsCache";

export const usePosition = () => {
  const { getPosition } = positionService;

  const { isLoading, error, data } = useQuery(POSITION_CACHE_KEY, getPosition);
  return { isLoading, error, data };
};

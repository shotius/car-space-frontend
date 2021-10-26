import { useLocation } from "react-router";

export function useQueryRarams() {
  return new URLSearchParams(useLocation().search)
}
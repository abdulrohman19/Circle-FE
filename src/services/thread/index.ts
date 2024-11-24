import { api } from "@/libs/api";
import { Thread } from "@/types/thread";
import { useQuery } from "@tanstack/react-query";

export function useFindThreads() {
  return useQuery<Thread[]>({
    queryKey: ["threads"],
    queryFn: async () => {
      const response = await api.get("/threads");
      console.log(response, 'data');
      return response.data as Thread[];
    },
  });
}

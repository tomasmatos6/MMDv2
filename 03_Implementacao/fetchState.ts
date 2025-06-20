export const createFetchState =
  (key: string, endpoint: string, getEnterpriseId: boolean = false) =>
  (set: (state: Partial<DropdownCreateResourceStore>) => void): FetchState => ({
    options: [],
    loading: false,
    fetchOptions: async () => {
      set({ [key]: { loading: true, options: [] } });
      try {
        const response = await get(endpoint, null);
        set({
          [key]: {
            options: transformDropdownContent(
              response?.content,
              getEnterpriseId
            ),
            loading: false,
          },
        });
      } catch (error) {
        console.error(error);
        set({ [key]: { loading: false, options: [] } });
      }
    },
  });

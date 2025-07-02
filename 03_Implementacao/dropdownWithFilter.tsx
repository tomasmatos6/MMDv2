const dropdowns = useMemo(
        () => [dropdown1, dropdown2, dropdown3],
        [dropdown1, dropdown2, dropdown3]
    );
    useEffect(() => {
        if (isDropdownFiltersLoaded) return;
        const loadDropdowns = async () => {
            await Promise.all(
                dropdownList.filter(item => !item.loading)
                    .map(item => item.fetchOptions())
            );
            setDropdownFiltersLoaded();
        };
        loadDropdowns();
    }, [setIsDropdownFiltersLoaded, isDropdownFiltersLoaded, dropdownList]
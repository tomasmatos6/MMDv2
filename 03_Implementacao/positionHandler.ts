export const handlePositionAsOptionType = (
  position: StaffingPlanRow | IStaffingPlanList | null,
  index: number
): UnionOptionType | null => {
  if (!position) {
    return null;
  }

  if (isUnionOptionType(position)) {
    if ('extraAttrs' in position) {
      return {
        id: index,
        label: getPositionExtraAttrsLabel(position.extraAttrs!, index),
      };
    }
    return position;
  }

  return {
    id: index,
    label: getPositionLabel(position, index),
  };
};

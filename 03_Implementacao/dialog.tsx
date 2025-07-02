import {
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2 as Grid,
  Switch,
  TextField,
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { handlePositionAsOptionType } from './positionHandler';

const dialog = () => {
  const {
    openDialog,
    actionType,
    index,
    setOpenDialong,
    setIndex,
    setActionType,
    resetDialogStore,
  } = useDialogStore();

  return (
    <Dialog open={openDialog} onClose={handleClose} maxWidth='lg' fullWidth>
      <DialogTitle sx={{ paddingBottom: 0 }}>
        {actionType === 'copy' ? 'Copy Assignment' : 'Assignment'} | Project:{' '}
        {getUnionTypeValue(formData.information.client)} |{' '}
        {formData.information.projectName}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container alignItems='center' spacing={2} sx={{ px: 3 }}>
          <Grid size={4}>
            <Controller
              name='position'
              control={control}
              rules={{ required: !isNewPosition && 'Position is required' }}
              render={({ field }) => {
                return (
                  <AutoComplete
                    {...field}
                    id='add-position'
                    label='Position'
                    options={formData.position.positionList
                      .map((pos, idx) => {
                        if ([1].includes(Number(getOptionTypeId(pos.status)))) {
                          return {
                            id: idx,
                            label: getPositionLabel(pos, idx),
                          };
                        }
                        return null;
                      })
                      .filter((pos) => pos != null)}
                    value={handlePositionAsOptionType(
                      watch('position'),
                      watch('positionId')
                    )}
                    disabled={isNewPosition || actionType === 'edit'}
                    handleChange={(_, newValue) => {
                      field.onChange(newValue);
                      if (newValue) {
                        handlePositionChange(newValue);
                      }
                    }}
                    error={!!errors.position}
                    helpterText={errors.position?.message ?? ' '}
                  />
                );
              }}
            />
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};

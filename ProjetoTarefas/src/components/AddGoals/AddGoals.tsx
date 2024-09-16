import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DialogProps } from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

interface AddGoalsProps {
  trigger: React.ReactNode; // O elemento que irá disparar o diálogo
  dialogProps?: Omit<DialogProps, 'open' | 'onClose'>; // Propriedades adicionais para o Dialog
}

// Componente Paper personalizado
const CustomPaper = styled('div')(({ theme }) => ({
  width: '33vw', // 1/3 da largura da tela
  height: '50vh', // Metade da altura da tela
  position: 'fixed',
  top: 0,
  left: 0,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  backdropFilter: 'blur(4px)', // Adiciona o efeito de desfoque no fundo
}));

// Componente DialogTitle personalizado
const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'left',
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const AddGoals: React.FC<AddGoalsProps> = ({ trigger, dialogProps }) => {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState('');

  // Função para abrir o diálogo
  const handleClickOpen = () => setOpen(true);

  // Função para fechar o diálogo
  const handleClose = () => {
    setOpen(false);
    setGoal(''); // Limpar o campo ao fechar
  };

  // Função para salvar a meta
  const handleSave = () => {
    console.log('Meta salva:', goal);
    handleClose();
  };

  return (
    <>
      {/* Elemento que dispara a abertura do diálogo */}
      <div onClick={handleClickOpen}>
        {trigger}
      </div>

      {/* Componente Dialog da MUI */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={CustomPaper} // Usa o componente de papel personalizado
        {...dialogProps}
      >
        <CustomDialogTitle color="grey">
          Cadastrar Nova Meta
        </CustomDialogTitle>
        <DialogContent>
          <Typography color="white">Insira os detalhes da nova meta abaixo:</Typography>
          <TextField
          margin="dense"
          id="id"
          label="Nome da Meta"
          multiline
          fullWidth
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          
          InputProps={{
            sx: {
              '& .MuiInputBase-input': {
                color: '#fff', // Cor do texto digitado
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: '#fff', // Cor da etiqueta
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFF', // Cor da borda do campo
              },
              '&:hover fieldset': {
                borderColor: '#fff', // Cor da borda quando o campo está em foco
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff', // Cor da borda quando o campo está em foco
              },
              backgroundColor: '#000', // Cor de fundo do campo
              borderRadius: '4px',
            },
          }}
        />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" color="success" onClick={handleSave}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddGoals;

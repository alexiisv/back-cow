import Swal from 'sweetalert2'

export async function ConfirmAlert ({
  title = 'Are you sure?',
  text = 'You won\'t be able to revert this!',
  onConfirm,
  onCancel
}) {
  const SwalCustom = Swal.mixin({
    customClass: {
      confirmButton: 'bg-rose-600 text-white font-semibold mr-2 px-4 py-2 rounded-lg',
      cancelButton: 'bg-slate-800 text-white font-semibold ml-2 px-4 py-2 rounded-lg'
    },
    buttonsStyling: false
  })
  SwalCustom.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((result) => {
    return result.isConfirmed ? onConfirm() : onCancel()
  })
}

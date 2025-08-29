import { Toaster } from 'sonner'

export default function Toast() {
    return (
        <div>
            <Toaster richColors expand={false} position='top-center'/>
        </div>
    )
}

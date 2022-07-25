const prompt = `
import('//cdn.jsdelivr.net/npm/sweetalert2@11.4.8/dist/sweetalert2.all.min.js').then(module => {
    window.prompt = async (message, defaultValue='') => {
        let { value: save_data } = await Sweetalert2.fire({
            title: message,
            input: 'text',
            inputValue: defaultValue,
            showCancelButton: true
        });

        return save_data;
    }
});
`

export default prompt

export const getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const setCookie = (name, value, options = {}) =>  {
    const configs = {
        path: '/',
        ...options,
    };

    if (configs.expires instanceof Date) {
        configs.expires = configs.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    Object.keys(configs).forEach((key) => {
        updatedCookie += `; ${key}`;
        const optionValue = configs[key];
        if (optionValue !== true) {
            updatedCookie += `=${optionValue}`;
        }
    });

    document.cookie = updatedCookie;
}

export const deleteCookie = (name) => {
    setCookie(name, '', {
        'max-age': -1,
    });
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const valueDefined = (value) => {
    if (Array.isArray(value)){
        return value.length>0;
    }else{
        return ((value!==undefined)&&(value!=="")&&(value!==null));
    }
};

export const addSpaces = (value) =>{
    if(!valueDefined(value)) return;
    return value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}
export interface IPost {
    id: number;
    title: string;
    body: string;
}
export interface IH1 {
    color: string;
    fontSize: string;
}
export interface IButton {
    text: string;
    primary: boolean;
    submit: () => void;
}
export interface ICreatePostFormItem {
    value: string;
    required: boolean;
    error: boolean;
}
export interface ICreatePostForm {
    title: ICreatePostFormItem;
    body: ICreatePostFormItem;
}
export interface IState {
    loading: ILoading;
    createPostForm: ICreatePostForm;
}
export interface IInputState {
    value: string;
    required: boolean;
}
export interface IInputProps {
    name: string;
    type: 'text' | 'number';
    placeholder?: string;
    label?: string;
    state: ICreatePostFormItem;
    action: (formItem: IFormItem) => void;
}
export interface IInput2Props {
    name: string;
    type: 'text' | 'number';
    placeholder?: string;
    label?: string;
    keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export interface IInputLocalState {
    key: string;
    value: ICreatePostFormItem;
}

export interface ILoading {
    value: boolean;
    success: string | null;
    error: string | null;
    successAction?: () => void;
    errorAction?: () => void;
}
export interface IFormItem {
    key: string;
    value: ICreatePostFormItem;
}
export interface IComment {
    postId: number;
    body: string;
    id?: number;
}
export interface IDetailPage {
    id: number;
    title: string;
    body: string;
    comments: IComment[];
}
export interface ICardProps {
    id: number;
    title: string;
    body: string;
    src?: string;
    landing?: boolean;
    router: (path: string) => void;
}

export interface ICardLanding {
    landing?: boolean;
    hover?: boolean;
}
export interface IPaginationProps {
    page: number;
    setPage: (number: number) => void;
    pageCount: number;
}
export interface IPaginationItem {
    active: boolean;
}
export interface INavbar {
    actionText: string;
    setTheme: () => void;
    router: (path: string) => void;
}

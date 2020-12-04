import React from 'react';

import './error-message.styles.scss';

type ErrorMessageProps = { error: Error }

const ErrorMessage = ({ error }: ErrorMessageProps) => (
    <div className="error-message">{error.message}</div>
);

export default ErrorMessage;

// Função para mostrar notificação
function showNotification(type, title, message, duration = 5000) {
    const container = document.getElementById('notifications-container');
    const notification = document.createElement('div');
    const id = 'notification-' + Date.now();
    
    notification.className = `notification ${type}`;
    notification.id = id;
    
    let icon;
    switch(type) {
        case 'success':
            icon = 'check-circle';
            break;
        case 'error':
            icon = 'times-circle';
            break;
        case 'warning':
            icon = 'exclamation-circle';
            break;
        case 'info':
        default:
            icon = 'info-circle';
            break;
    }
    
    notification.innerHTML = `
        <i class="fas fa-${icon} notification-icon"></i>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <i class="fas fa-times notification-close" onclick="closeNotification('${id}')"></i>
    `;
    
    container.appendChild(notification);
    
    // Auto-remover após a duração especificada
    setTimeout(() => closeNotification(id), duration);
    
    return id;
}

// Função para fechar notificação
function closeNotification(id) {
    const notification = document.getElementById(id);
    if (!notification) return;
    
    notification.classList.add('hiding');
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Funções de atalho para diferentes tipos de notificação
function showSuccess(title, message, duration) {
    return showNotification('success', title, message, duration);
}

function showError(title, message, duration) {
    return showNotification('error', title, message, duration);
}

function showWarning(title, message, duration) {
    return showNotification('warning', title, message, duration);
}

function showInfo(title, message, duration) {
    return showNotification('info', title, message, duration);
} 
interface StyleButtonProps {
    active: boolean
    style: string
    label: string
    ontoggle: (style: string) => void
}

const StyleButton = ({ onToggle, label, style, active }) => {
    const handleToggle = (e) => {
        e.preventDefault()
        onToggle(style)
    }

    let className = 'style-button';
    if (active) {
        className += ' active-button';
    }

    return (
        <span className={className} onMouseDown={handleToggle}>
            {label}
            <style jsx>{`
      .style-button {
  color: #999;
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
}

.active-button {
  color: #5890ff;
}
      `}</style>
        </span>
    );
}

export default StyleButton
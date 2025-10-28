/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */

export const EVENT_TYPES = {
  HOVER: 'hover',
  DRAGGING: 'dragging',
  NONE: '', // for reversing the styles
}

export const getLinkConfig = () => ({
  link: {
    containerClass: 'link_container',
    pathClass: 'link_path',
    invisiblePathClass: 'link_path__invisible',
    /**
     * Path attributes can also be a function
     * e.g. element.attr('stroke', color:(d) => d.styles.color )
     */
    color: '#0e9bc0',
    strokeWidth: 2.5,
    invisibleStrokeWidth: 12,
    invisibleOpacity: 0,
    invisibleHighlightColor: '#0e9bc0',
    dashArr: '5',
    opacity: 0.5,
    [EVENT_TYPES.HOVER]: { opacity: 1 },
    [EVENT_TYPES.DRAGGING]: { opacity: 1 },
    /**
     * false: Link drawn from source node center to target node center.
     * true: Link drawn from source node attribute to target node attribute. Each
     * link must contain relationshipData.
     * e.g.  relationshipData: { src_attr_id: uid, target_attr_id: uid }
     */
    isAttrToAttr: false,
  },
})

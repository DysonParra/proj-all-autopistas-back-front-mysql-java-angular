/*
 * @fileoverview    {TramaComunicacionRestAssembler}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.TramaComunicacionDTO;
import com.project.dev.api.web.rest.TramaComunicacionRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code TramaComunicacionRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class TramaComunicacionRestAssembler implements RepresentationModelAssembler<TramaComunicacionDTO, EntityModel<TramaComunicacionDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<TramaComunicacionDTO> toModel(TramaComunicacionDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(TramaComunicacionRest.class).getEntity(String.valueOf(entityDTO.getIntIdTrama()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(TramaComunicacionRest.class).getAllEntities()).withRel("TramaComunicacion"));
    }
}
